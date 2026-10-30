import mongoose from 'mongoose';
const itemSchema = new mongoose.Schema({
  name: String, description: String, price: Number, category: String,
  image: String, isVeg: { type: Boolean, default: true }, isAvailable: { type: Boolean, default: true },
  popular: { type: Boolean, default: false }
});
const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true }, slug: String, cuisine: [String], description: String,
  image: String, banner: String, rating: { type: Number, default: 4.2 }, deliveryTime: String,
  deliveryFee: { type: Number, default: 25 }, minimumOrder: { type: Number, default: 99 },
  location: String, isOpen: { type: Boolean, default: true }, owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  menu: [itemSchema]
}, { timestamps: true });
export default mongoose.model('Restaurant', restaurantSchema);
