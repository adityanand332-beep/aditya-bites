import { Router } from 'express';
import User from '../models/User.js';
import Restaurant from '../models/Restaurant.js';
import Order from '../models/Order.js';
import { protect, allow } from '../middleware/auth.js';
const router = Router(); router.use(protect,allow('admin'));
router.get('/overview', async (_,res) => {
  const [users,restaurants,orders,revenue,pending] = await Promise.all([
    User.countDocuments(),Restaurant.countDocuments(),Order.countDocuments(),
    Order.aggregate([{ $match:{ status:{ $ne:'Cancelled' } } },{ $group:{ _id:null,total:{ $sum:'$total' } } }]),
    Order.countDocuments({ status:{ $in:['Placed','Confirmed','Preparing'] } })
  ]);
  const recent = await Order.find().populate('customer','name').populate('restaurant','name').sort({ createdAt:-1 }).limit(8);
  res.json({ stats:{ users,restaurants,orders,revenue:revenue[0]?.total||0,pending },recent });
});
router.get('/orders', async (_,res) => res.json({ orders:await Order.find().populate('customer','name email').populate('restaurant','name').sort({ createdAt:-1 }) }));
router.get('/users', async (_,res) => res.json({ users:await User.find().select('-password').sort({ createdAt:-1 }) }));
router.post('/restaurants', async (req,res) => res.status(201).json({ restaurant:await Restaurant.create(req.body) }));
router.patch('/orders/:id/status', async (req,res) => {
  const allowed=['Placed','Confirmed','Preparing','Out for delivery','Delivered','Cancelled'];
  if (!allowed.includes(req.body.status)) return res.status(400).json({ message:'Invalid status' });
  const order=await Order.findByIdAndUpdate(req.params.id,{status:req.body.status},{new:true});
  if (!order) return res.status(404).json({message:'Order not found'});
  res.json({order});
});
export default router;
