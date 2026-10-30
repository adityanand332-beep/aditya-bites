import { Router } from 'express';
import Order from '../models/Order.js';
import Restaurant from '../models/Restaurant.js';
import { protect,allow } from '../middleware/auth.js';
const router=Router(); router.use(protect,allow('restaurant','admin'));
async function myRestaurant(req) {
  if (req.user.role==='admin' && req.query.restaurantId) return Restaurant.findById(req.query.restaurantId);
  return Restaurant.findOne({ owner:req.user._id });
}
router.get('/orders',async(req,res)=>{
  const r=await myRestaurant(req); if(!r) return res.status(404).json({message:'Restaurant profile not linked to this account'});
  res.json({orders:await Order.find({restaurant:r._id}).populate('customer','name phone').sort({createdAt:-1})});
});
router.patch('/orders/:id/status',async(req,res)=>{
  const r=await myRestaurant(req); if(!r) return res.status(404).json({message:'Restaurant not found'});
  const order=await Order.findOne({_id:req.params.id,restaurant:r._id});
  if(!order) return res.status(404).json({message:'Order not found'});
  if(!['Confirmed','Preparing','Out for delivery','Cancelled'].includes(req.body.status)) return res.status(400).json({message:'Invalid status'});
  order.status=req.body.status; await order.save(); res.json({order});
});
router.patch('/menu/:itemId',async(req,res)=>{
  const r=await myRestaurant(req); if(!r) return res.status(404).json({message:'Restaurant not found'});
  const item=r.menu.id(req.params.itemId); if(!item) return res.status(404).json({message:'Item not found'});
  Object.assign(item,req.body); await r.save(); res.json({restaurant:r});
});
export default router;
