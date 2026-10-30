import { Router } from 'express';
import Restaurant from '../models/Restaurant.js';
const router = Router();
router.get('/', async (req,res) => {
  const { search, cuisine, sort } = req.query;
  const filter = { isOpen:true };
  if (search) filter.$or = [{ name:{ $regex:search,$options:'i' } },{ cuisine:{ $regex:search,$options:'i' } }];
  if (cuisine && cuisine !== 'All') filter.cuisine = cuisine;
  let query = Restaurant.find(filter);
  if (sort === 'rating') query = query.sort({ rating:-1 });
  if (sort === 'fastest') query = query.sort({ deliveryTime:1 });
  res.json({ restaurants:await query });
});
router.get('/:id', async (req,res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  if (!restaurant) return res.status(404).json({ message:'Restaurant not found' });
  res.json({ restaurant });
});
export default router;
