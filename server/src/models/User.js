import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  phone: { type: String, default: '' },
  role: { type: String, enum: ['customer','admin','restaurant','delivery'], default: 'customer' },
  addresses: [{ label: String, line: String, city: String, pincode: String, isDefault: Boolean }]
}, { timestamps: true });
export default mongoose.model('User', userSchema);
