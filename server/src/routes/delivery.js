import { Router } from 'express';
import Order from '../models/Order.js';
import { protect,allow } from '../middleware/auth.js';
const router=Router(); router.use(protect,allow('delivery','admin'));
router.get('/orders',async(req,res)=>{
  const filter=req.user.role==='admin'?{status:'Out for delivery'}:{status:'Out for delivery',$or:[{deliveryPartner:null},{deliveryPartner:req.user._id}]};
  res.json({orders:await Order.find(filter).populate('customer','name phone').populate('restaurant','name location').sort({createdAt:1})});
});
router.patch('/orders/:id/status',async(req,res)=>{
  const order=await Order.findById(req.params.id);
  if(!order) return res.status(404).json({message:'Order not found'});
  if(req.body.status==='Accepted'){order.deliveryPartner=req.user._id;}
  else if(['Delivered','Out for delivery'].includes(req.body.status)){order.status=req.body.status;}
  else return res.status(400).json({message:'Invalid delivery action'});
  await order.save(); res.json({order});
});
export default router;
