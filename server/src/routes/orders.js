
import { Router } from 'express';
import Order from '../models/Order.js';
import Restaurant from '../models/Restaurant.js';
import { protect } from '../middleware/auth.js';

const router = Router();

router.use(protect);

// PLACE ORDER
router.post('/', async (req, res) => {
  try {
    const {
      restaurantId,
      items,
      address,
      paymentMethod,
      coupon,
      notes
    } = req.body;

    if (!restaurantId || !items?.length || !address?.line) {
      return res.status(400).json({
        message: 'Restaurant, items and delivery address are required'
      });
    }

    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant || !restaurant.isOpen) {
      return res.status(400).json({
        message: 'Restaurant is unavailable'
      });
    }

    const cleanItems = items.map((i) => {
      const menuItem = restaurant.menu.id(i.itemId);

      if (!menuItem) {
        throw new Error(`Menu item ID not found: ${i.name}`);
      }

      if (menuItem.isAvailable === false) {
        throw new Error(`Menu item unavailable: ${menuItem.name}`);
      }

      return {
        name: menuItem.name,
        price: menuItem.price,
        quantity: Math.max(1, Math.min(20, Number(i.quantity) || 1)),
        image: menuItem.image
      };
    });

    const subtotal = cleanItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    if (subtotal < restaurant.minimumOrder) {
      return res.status(400).json({
        message: `Minimum order is ₹${restaurant.minimumOrder}`
      });
    }

    const validCoupon =
      coupon?.toUpperCase() === 'ADITYA10' && subtotal >= 199;

    const discount = validCoupon
      ? Math.min(100, Math.round(subtotal * 0.10))
      : 0;

    const deliveryFee = subtotal >= 499 ? 0 : restaurant.deliveryFee;

    const order = await Order.create({
      orderNumber: 'AB' + Date.now().toString().slice(-8),
      customer: req.user._id,
      restaurant: restaurant._id,
      items: cleanItems,
      address,
      subtotal,
      deliveryFee,
      discount,
      total: subtotal + deliveryFee - discount,
      coupon: validCoupon ? 'ADITYA10' : '',
      paymentMethod:
        paymentMethod === 'DEMO_ONLINE' ? 'DEMO_ONLINE' : 'COD',
      paymentStatus:
        paymentMethod === 'DEMO_ONLINE' ? 'Demo paid' : 'Pending',
      notes
    });

    return res.status(201).json({ order });

  } catch (error) {
    console.error('Order error:', error);

    return res.status(400).json({
      message: error.message || 'Unable to place order'
    });
  }
});

// GET MY ORDERS
router.get('/my', async (req, res) => {
  try {
    const orders = await Order.find({
      customer: req.user._id
    })
      .populate('restaurant', 'name image')
      .sort({ createdAt: -1 });

    res.json({ orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET SINGLE ORDER
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      customer: req.user._id
    })
      .populate('restaurant', 'name image')
      .populate('deliveryPartner', 'name phone');

    if (!order) {
      return res.status(404).json({
        message: 'Order not found'
      });
    }

    res.json({ order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CANCEL ORDER
router.patch('/:id/cancel', async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      customer: req.user._id
    });

    if (!order) {
      return res.status(404).json({
        message: 'Order not found'
      });
    }

    if (!['Placed', 'Confirmed'].includes(order.status)) {
      return res.status(400).json({
        message: 'This order can no longer be cancelled'
      });
    }

    order.status = 'Cancelled';
    await order.save();

    res.json({ order });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
