import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, unique: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  items: [{ name: String, price: Number, quantity: Number, image: String }],
  address: { label: String, line: String, city: String, pincode: String, phone: String },
  subtotal: Number, deliveryFee: Number, discount: Number, total: Number,
  coupon: String, paymentMethod: { type: String, enum: ['COD','DEMO_ONLINE'], default: 'COD' },
  paymentStatus: { type: String, default: 'Pending' },
  status: { type: String, enum: ['Placed','Confirmed','Preparing','Out for delivery','Delivered','Cancelled'], default: 'Placed' },
  deliveryPartner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  notes: String
}, { timestamps: true });
export default mongoose.model('Order', orderSchema);
