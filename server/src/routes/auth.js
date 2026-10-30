import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';
import { protect } from '../middleware/auth.js';
const router = Router();
const tokenFor = id => jwt.sign({ id }, process.env.JWT_SECRET || 'development_secret_change_me', { expiresIn: '7d' });
const safe = user => ({ id:user._id, name:user.name, email:user.email, role:user.role, phone:user.phone, addresses:user.addresses });
router.post('/register', [
  body('name').trim().isLength({ min:2 }), body('email').isEmail(), body('password').isLength({ min:8 })
], async (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ message:'Enter a name, valid email and password (8+ characters).' });
  try {
    const { name,email,password,phone } = req.body;
    if (await User.findOne({ email })) return res.status(409).json({ message:'Email already registered' });
    const user = await User.create({ name,email,password:await bcrypt.hash(password,12),phone });
    res.status(201).json({ token:tokenFor(user._id), user:safe(user) });
  } catch (e) { res.status(500).json({ message:'Could not create account' }); }
});
router.post('/login', async (req,res) => {
  const user = await User.findOne({ email:(req.body.email || '').toLowerCase() });
  if (!user || !await bcrypt.compare(req.body.password || '', user.password)) return res.status(401).json({ message:'Incorrect email or password' });
  res.json({ token:tokenFor(user._id), user:safe(user) });
});
router.get('/me', protect, (req,res) => res.json({ user:safe(req.user) }));
router.patch('/profile', protect, async (req,res) => {
  const user = await User.findByIdAndUpdate(req.user._id, { name:req.body.name, phone:req.body.phone }, { new:true, runValidators:true }).select('-password');
  res.json({ user:safe(user) });
});
router.post('/addresses', protect, async (req,res) => {
  const user = await User.findById(req.user._id);
  user.addresses.push(req.body);
  await user.save();
  res.status(201).json({ addresses:user.addresses });
});
export default router;
