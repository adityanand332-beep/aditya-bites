import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Restaurant from '../models/Restaurant.js';
dotenv.config();
await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/aditya_bites');
// Re-seeding replaces demo users, restaurants and orders-related demo data.
await Promise.all([User.deleteMany({}), Restaurant.deleteMany({})]);
const password = await bcrypt.hash('Demo@123', 12);
const [customer, admin, owner, delivery] = await User.create([
  {name:'Demo Customer',email:'customer@adityabites.in',password,role:'customer',phone:'9000000001'},
  {name:'Aditya Anand',email:'admin@adityabites.in',password,role:'admin'},
  {name:'Restaurant Owner',email:'restaurant@adityabites.in',password,role:'restaurant'},
  {name:'Delivery Partner',email:'delivery@adityabites.in',password,role:'delivery',phone:'9000000002'}
]);
const restaurants = [
  {
    "name": "The Biryani House",
    "slug": "the-biryani-house",
    "cuisine": [
      "Biryani",
      "North Indian"
    ],
    "description": "Freshly prepared biryani, north indian favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1563379091339-03246963d96a?w=900",
    "banner": "https://images.unsplash.com/photo-1563379091339-03246963d96a?w=1400",
    "rating": 4.7,
    "deliveryTime": "27–37 min",
    "deliveryFee": 25,
    "minimumOrder": 199,
    "location": "Boring Road, Patna",
    "menu": [
      {
        "name": "Chicken Dum Biryani",
        "description": "Chicken Dum Biryani freshly prepared with quality ingredients and our house special touch.",
        "price": 155,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1563379091339-03246963d96a?w=500",
        "isVeg": false,
        "popular": true
      },
      {
        "name": "Mutton Dum Biryani",
        "description": "Mutton Dum Biryani freshly prepared with quality ingredients and our house special touch.",
        "price": 171,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1563379091339-03246963d96a?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Paneer Biryani",
        "description": "Paneer Biryani freshly prepared with quality ingredients and our house special touch.",
        "price": 148,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1563379091339-03246963d96a?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Veg Biryani",
        "description": "Veg Biryani freshly prepared with quality ingredients and our house special touch.",
        "price": 138,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1563379091339-03246963d96a?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Chicken 65",
        "description": "Chicken 65 freshly prepared with quality ingredients and our house special touch.",
        "price": 104,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1563379091339-03246963d96a?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Butter Chicken",
        "description": "Butter Chicken freshly prepared with quality ingredients and our house special touch.",
        "price": 185,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1563379091339-03246963d96a?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Paneer Butter Masala",
        "description": "Paneer Butter Masala freshly prepared with quality ingredients and our house special touch.",
        "price": 292,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1563379091339-03246963d96a?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Gulab Jamun",
        "description": "Gulab Jamun freshly prepared with quality ingredients and our house special touch.",
        "price": 204,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "Burger Junction",
    "slug": "burger-junction",
    "cuisine": [
      "Burgers",
      "Fast Food"
    ],
    "description": "Freshly prepared burgers, fast food favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900",
    "banner": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1400",
    "rating": 4.5,
    "deliveryTime": "37–47 min",
    "deliveryFee": 15,
    "minimumOrder": 99,
    "location": "Fraser Road, Patna",
    "menu": [
      {
        "name": "Classic Cheese Burger",
        "description": "Classic Cheese Burger freshly prepared with quality ingredients and our house special touch.",
        "price": 131,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Crispy Veg Burger",
        "description": "Crispy Veg Burger freshly prepared with quality ingredients and our house special touch.",
        "price": 108,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Double Chicken Burger",
        "description": "Double Chicken Burger freshly prepared with quality ingredients and our house special touch.",
        "price": 189,
        "category": "Burgers",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Peri Peri Fries",
        "description": "Peri Peri Fries freshly prepared with quality ingredients and our house special touch.",
        "price": 140,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Loaded Cheese Fries",
        "description": "Loaded Cheese Fries freshly prepared with quality ingredients and our house special touch.",
        "price": 221,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Chicken Nuggets",
        "description": "Chicken Nuggets freshly prepared with quality ingredients and our house special touch.",
        "price": 198,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Cold Coffee",
        "description": "Cold Coffee freshly prepared with quality ingredients and our house special touch.",
        "price": 175,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Chocolate Shake",
        "description": "Chocolate Shake freshly prepared with quality ingredients and our house special touch.",
        "price": 256,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "Pizza District",
    "slug": "pizza-district",
    "cuisine": [
      "Pizza",
      "Italian"
    ],
    "description": "Freshly prepared pizza, italian favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900",
    "banner": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1400",
    "rating": 4.6,
    "deliveryTime": "32–42 min",
    "deliveryFee": 25,
    "minimumOrder": 199,
    "location": "Kankarbagh, Patna",
    "menu": [
      {
        "name": "Farmhouse Pizza",
        "description": "Farmhouse Pizza freshly prepared with quality ingredients and our house special touch.",
        "price": 274,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Margherita Pizza",
        "description": "Margherita Pizza freshly prepared with quality ingredients and our house special touch.",
        "price": 95,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Paneer Tikka Pizza",
        "description": "Paneer Tikka Pizza freshly prepared with quality ingredients and our house special touch.",
        "price": 150,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Chicken Dominator Pizza",
        "description": "Chicken Dominator Pizza freshly prepared with quality ingredients and our house special touch.",
        "price": 244,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
        "isVeg": false,
        "popular": true
      },
      {
        "name": "Garlic Bread",
        "description": "Garlic Bread freshly prepared with quality ingredients and our house special touch.",
        "price": 130,
        "category": "Italian",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Cheese Burst Pizza",
        "description": "Cheese Burst Pizza freshly prepared with quality ingredients and our house special touch.",
        "price": 237,
        "category": "Pizza",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Pasta Alfredo",
        "description": "Pasta Alfredo freshly prepared with quality ingredients and our house special touch.",
        "price": 201,
        "category": "Italian",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Choco Lava Cake",
        "description": "Choco Lava Cake freshly prepared with quality ingredients and our house special touch.",
        "price": 256,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "Sweet Cravings",
    "slug": "sweet-cravings",
    "cuisine": [
      "Desserts",
      "Bakery"
    ],
    "description": "Freshly prepared desserts, bakery favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900",
    "banner": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1400",
    "rating": 4.4,
    "deliveryTime": "32–42 min",
    "deliveryFee": 25,
    "minimumOrder": 199,
    "location": "Rajendra Nagar, Patna",
    "menu": [
      {
        "name": "Chocolate Truffle Cake",
        "description": "Chocolate Truffle Cake freshly prepared with quality ingredients and our house special touch.",
        "price": 144,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Red Velvet Cake",
        "description": "Red Velvet Cake freshly prepared with quality ingredients and our house special touch.",
        "price": 82,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Brownie Sundae",
        "description": "Brownie Sundae freshly prepared with quality ingredients and our house special touch.",
        "price": 98,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Gulab Jamun",
        "description": "Gulab Jamun freshly prepared with quality ingredients and our house special touch.",
        "price": 88,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Rasgulla",
        "description": "Rasgulla freshly prepared with quality ingredients and our house special touch.",
        "price": 299,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Choco Chip Cookies",
        "description": "Choco Chip Cookies freshly prepared with quality ingredients and our house special touch.",
        "price": 237,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Cheesecake Slice",
        "description": "Cheesecake Slice freshly prepared with quality ingredients and our house special touch.",
        "price": 240,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Cold Coffee",
        "description": "Cold Coffee freshly prepared with quality ingredients and our house special touch.",
        "price": 204,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "Wok Express",
    "slug": "wok-express",
    "cuisine": [
      "Chinese",
      "Fast Food"
    ],
    "description": "Freshly prepared chinese, fast food favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900",
    "banner": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=1400",
    "rating": 4.5,
    "deliveryTime": "37–47 min",
    "deliveryFee": 25,
    "minimumOrder": 199,
    "location": "Boring Road, Patna",
    "menu": [
      {
        "name": "Veg Hakka Noodles",
        "description": "Veg Hakka Noodles freshly prepared with quality ingredients and our house special touch.",
        "price": 79,
        "category": "Chinese",
        "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Chicken Hakka Noodles",
        "description": "Chicken Hakka Noodles freshly prepared with quality ingredients and our house special touch.",
        "price": 160,
        "category": "Chinese",
        "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Veg Fried Rice",
        "description": "Veg Fried Rice freshly prepared with quality ingredients and our house special touch.",
        "price": 98,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Chicken Fried Rice",
        "description": "Chicken Fried Rice freshly prepared with quality ingredients and our house special touch.",
        "price": 179,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500",
        "isVeg": false,
        "popular": true
      },
      {
        "name": "Chilli Paneer",
        "description": "Chilli Paneer freshly prepared with quality ingredients and our house special touch.",
        "price": 143,
        "category": "Chinese",
        "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Chilli Chicken",
        "description": "Chilli Chicken freshly prepared with quality ingredients and our house special touch.",
        "price": 185,
        "category": "Chinese",
        "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Spring Rolls",
        "description": "Spring Rolls freshly prepared with quality ingredients and our house special touch.",
        "price": 188,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Manchurian",
        "description": "Manchurian freshly prepared with quality ingredients and our house special touch.",
        "price": 191,
        "category": "Chinese",
        "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "Dosa Corner",
    "slug": "dosa-corner",
    "cuisine": [
      "South Indian"
    ],
    "description": "Freshly prepared south indian favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900",
    "banner": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1400",
    "rating": 4.3,
    "deliveryTime": "37–47 min",
    "deliveryFee": 25,
    "minimumOrder": 199,
    "location": "Bailey Road, Patna",
    "menu": [
      {
        "name": "Masala Dosa",
        "description": "Masala Dosa freshly prepared with quality ingredients and our house special touch.",
        "price": 222,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Plain Dosa",
        "description": "Plain Dosa freshly prepared with quality ingredients and our house special touch.",
        "price": 238,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Mysore Masala Dosa",
        "description": "Mysore Masala Dosa freshly prepared with quality ingredients and our house special touch.",
        "price": 150,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Idli Sambar",
        "description": "Idli Sambar freshly prepared with quality ingredients and our house special touch.",
        "price": 88,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Medu Vada",
        "description": "Medu Vada freshly prepared with quality ingredients and our house special touch.",
        "price": 91,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Uttapam",
        "description": "Uttapam freshly prepared with quality ingredients and our house special touch.",
        "price": 94,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Paneer Dosa",
        "description": "Paneer Dosa freshly prepared with quality ingredients and our house special touch.",
        "price": 175,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Filter Coffee",
        "description": "Filter Coffee freshly prepared with quality ingredients and our house special touch.",
        "price": 230,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "Momo Nation",
    "slug": "momo-nation",
    "cuisine": [
      "Momos",
      "Tibetan"
    ],
    "description": "Freshly prepared momos, tibetan favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1563245620-7d6f4f3f7b2f?w=900",
    "banner": "https://images.unsplash.com/photo-1563245620-7d6f4f3f7b2f?w=1400",
    "rating": 4.6,
    "deliveryTime": "37–47 min",
    "deliveryFee": 25,
    "minimumOrder": 199,
    "location": "Kankarbagh, Patna",
    "menu": [
      {
        "name": "Veg Steamed Momos",
        "description": "Veg Steamed Momos freshly prepared with quality ingredients and our house special touch.",
        "price": 79,
        "category": "Momos",
        "image": "https://images.unsplash.com/photo-1563245620-7d6f4f3f7b2f?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Chicken Steamed Momos",
        "description": "Chicken Steamed Momos freshly prepared with quality ingredients and our house special touch.",
        "price": 160,
        "category": "Momos",
        "image": "https://images.unsplash.com/photo-1563245620-7d6f4f3f7b2f?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Paneer Fried Momos",
        "description": "Paneer Fried Momos freshly prepared with quality ingredients and our house special touch.",
        "price": 150,
        "category": "Momos",
        "image": "https://images.unsplash.com/photo-1563245620-7d6f4f3f7b2f?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Chicken Fried Momos",
        "description": "Chicken Fried Momos freshly prepared with quality ingredients and our house special touch.",
        "price": 192,
        "category": "Momos",
        "image": "https://images.unsplash.com/photo-1563245620-7d6f4f3f7b2f?w=500",
        "isVeg": false,
        "popular": true
      },
      {
        "name": "Kurkure Momos",
        "description": "Kurkure Momos freshly prepared with quality ingredients and our house special touch.",
        "price": 143,
        "category": "Momos",
        "image": "https://images.unsplash.com/photo-1563245620-7d6f4f3f7b2f?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Tandoori Momos",
        "description": "Tandoori Momos freshly prepared with quality ingredients and our house special touch.",
        "price": 185,
        "category": "Momos",
        "image": "https://images.unsplash.com/photo-1563245620-7d6f4f3f7b2f?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Momo Platter",
        "description": "Momo Platter freshly prepared with quality ingredients and our house special touch.",
        "price": 188,
        "category": "Momos",
        "image": "https://images.unsplash.com/photo-1563245620-7d6f4f3f7b2f?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Hot Garlic Soup",
        "description": "Hot Garlic Soup freshly prepared with quality ingredients and our house special touch.",
        "price": 256,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1563245620-7d6f4f3f7b2f?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "Rolls & Bowls",
    "slug": "rolls-and-bowls",
    "cuisine": [
      "Rolls",
      "Fast Food"
    ],
    "description": "Freshly prepared rolls, fast food favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900",
    "banner": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=1400",
    "rating": 4.2,
    "deliveryTime": "27–37 min",
    "deliveryFee": 20,
    "minimumOrder": 149,
    "location": "Patliputra, Patna",
    "menu": [
      {
        "name": "Paneer Kathi Roll",
        "description": "Paneer Kathi Roll freshly prepared with quality ingredients and our house special touch.",
        "price": 79,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Chicken Kathi Roll",
        "description": "Chicken Kathi Roll freshly prepared with quality ingredients and our house special touch.",
        "price": 121,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Egg Roll",
        "description": "Egg Roll freshly prepared with quality ingredients and our house special touch.",
        "price": 241,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Double Egg Roll",
        "description": "Double Egg Roll freshly prepared with quality ingredients and our house special touch.",
        "price": 140,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
        "isVeg": false,
        "popular": true
      },
      {
        "name": "Veg Rice Bowl",
        "description": "Veg Rice Bowl freshly prepared with quality ingredients and our house special touch.",
        "price": 143,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Chicken Rice Bowl",
        "description": "Chicken Rice Bowl freshly prepared with quality ingredients and our house special touch.",
        "price": 224,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Peri Peri Wrap",
        "description": "Peri Peri Wrap freshly prepared with quality ingredients and our house special touch.",
        "price": 214,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Masala Lemonade",
        "description": "Masala Lemonade freshly prepared with quality ingredients and our house special touch.",
        "price": 256,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "Thali Junction",
    "slug": "thali-junction",
    "cuisine": [
      "Thali",
      "North Indian"
    ],
    "description": "Freshly prepared thali, north indian favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=900",
    "banner": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1400",
    "rating": 4.5,
    "deliveryTime": "32–42 min",
    "deliveryFee": 25,
    "minimumOrder": 199,
    "location": "Dak Bungalow, Patna",
    "menu": [
      {
        "name": "Veg Mini Thali",
        "description": "Veg Mini Thali freshly prepared with quality ingredients and our house special touch.",
        "price": 311,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Special Veg Thali",
        "description": "Special Veg Thali freshly prepared with quality ingredients and our house special touch.",
        "price": 158,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "North Indian Thali",
        "description": "North Indian Thali freshly prepared with quality ingredients and our house special touch.",
        "price": 200,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Dal Makhani Thali",
        "description": "Dal Makhani Thali freshly prepared with quality ingredients and our house special touch.",
        "price": 216,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Paneer Thali",
        "description": "Paneer Thali freshly prepared with quality ingredients and our house special touch.",
        "price": 180,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Chicken Thali",
        "description": "Chicken Thali freshly prepared with quality ingredients and our house special touch.",
        "price": 222,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Jeera Rice",
        "description": "Jeera Rice freshly prepared with quality ingredients and our house special touch.",
        "price": 162,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Lassi",
        "description": "Lassi freshly prepared with quality ingredients and our house special touch.",
        "price": 126,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "Chai & Samosa",
    "slug": "chai-and-samosa",
    "cuisine": [
      "Beverages",
      "Street Food"
    ],
    "description": "Freshly prepared beverages, street food favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=900",
    "banner": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1400",
    "rating": 4.1,
    "deliveryTime": "27–37 min",
    "deliveryFee": 20,
    "minimumOrder": 149,
    "location": "Boring Road, Patna",
    "menu": [
      {
        "name": "Masala Chai",
        "description": "Masala Chai freshly prepared with quality ingredients and our house special touch.",
        "price": 222,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Kulhad Chai",
        "description": "Kulhad Chai freshly prepared with quality ingredients and our house special touch.",
        "price": 251,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Adrak Chai",
        "description": "Adrak Chai freshly prepared with quality ingredients and our house special touch.",
        "price": 267,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Samosa (2 pcs)",
        "description": "Samosa (2 pcs) freshly prepared with quality ingredients and our house special touch.",
        "price": 127,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Paneer Pakora",
        "description": "Paneer Pakora freshly prepared with quality ingredients and our house special touch.",
        "price": 143,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Bread Pakora",
        "description": "Bread Pakora freshly prepared with quality ingredients and our house special touch.",
        "price": 159,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Veg Sandwich",
        "description": "Veg Sandwich freshly prepared with quality ingredients and our house special touch.",
        "price": 188,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Cold Coffee",
        "description": "Cold Coffee freshly prepared with quality ingredients and our house special touch.",
        "price": 204,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "The Pasta Project",
    "slug": "the-pasta-project",
    "cuisine": [
      "Italian",
      "Fast Food"
    ],
    "description": "Freshly prepared italian, fast food favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900",
    "banner": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1400",
    "rating": 4.4,
    "deliveryTime": "27–37 min",
    "deliveryFee": 25,
    "minimumOrder": 199,
    "location": "Sri Krishna Puri, Patna",
    "menu": [
      {
        "name": "White Sauce Pasta",
        "description": "White Sauce Pasta freshly prepared with quality ingredients and our house special touch.",
        "price": 79,
        "category": "Italian",
        "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Red Sauce Pasta",
        "description": "Red Sauce Pasta freshly prepared with quality ingredients and our house special touch.",
        "price": 82,
        "category": "Italian",
        "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Pink Sauce Pasta",
        "description": "Pink Sauce Pasta freshly prepared with quality ingredients and our house special touch.",
        "price": 124,
        "category": "Italian",
        "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Chicken Alfredo Pasta",
        "description": "Chicken Alfredo Pasta freshly prepared with quality ingredients and our house special touch.",
        "price": 218,
        "category": "Italian",
        "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500",
        "isVeg": false,
        "popular": true
      },
      {
        "name": "Arrabbiata Pasta",
        "description": "Arrabbiata Pasta freshly prepared with quality ingredients and our house special touch.",
        "price": 182,
        "category": "Italian",
        "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Cheese Garlic Bread",
        "description": "Cheese Garlic Bread freshly prepared with quality ingredients and our house special touch.",
        "price": 250,
        "category": "Italian",
        "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": " bruschetta",
        "description": " bruschetta freshly prepared with quality ingredients and our house special touch.",
        "price": 175,
        "category": "Italian",
        "image": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Tiramisu",
        "description": "Tiramisu freshly prepared with quality ingredients and our house special touch.",
        "price": 165,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "Punjabi Tadka",
    "slug": "punjabi-tadka",
    "cuisine": [
      "North Indian",
      "Punjabi"
    ],
    "description": "Freshly prepared north indian, punjabi favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900",
    "banner": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1400",
    "rating": 4.6,
    "deliveryTime": "27–37 min",
    "deliveryFee": 20,
    "minimumOrder": 149,
    "location": "Boring Road, Patna",
    "menu": [
      {
        "name": "Paneer Lababdar",
        "description": "Paneer Lababdar freshly prepared with quality ingredients and our house special touch.",
        "price": 274,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Dal Makhani",
        "description": "Dal Makhani freshly prepared with quality ingredients and our house special touch.",
        "price": 251,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Shahi Paneer",
        "description": "Shahi Paneer freshly prepared with quality ingredients and our house special touch.",
        "price": 293,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Chole Bhature",
        "description": "Chole Bhature freshly prepared with quality ingredients and our house special touch.",
        "price": 114,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Amritsari Kulcha",
        "description": "Amritsari Kulcha freshly prepared with quality ingredients and our house special touch.",
        "price": 182,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Butter Naan",
        "description": "Butter Naan freshly prepared with quality ingredients and our house special touch.",
        "price": 146,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Chicken Curry",
        "description": "Chicken Curry freshly prepared with quality ingredients and our house special touch.",
        "price": 201,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Lassi",
        "description": "Lassi freshly prepared with quality ingredients and our house special touch.",
        "price": 126,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "Roll House",
    "slug": "roll-house",
    "cuisine": [
      "Rolls",
      "Fast Food"
    ],
    "description": "Freshly prepared rolls, fast food favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=900",
    "banner": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=1400",
    "rating": 4.2,
    "deliveryTime": "32–42 min",
    "deliveryFee": 20,
    "minimumOrder": 149,
    "location": "Kankarbagh, Patna",
    "menu": [
      {
        "name": "Aloo Tikki Roll",
        "description": "Aloo Tikki Roll freshly prepared with quality ingredients and our house special touch.",
        "price": 274,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Paneer Roll",
        "description": "Paneer Roll freshly prepared with quality ingredients and our house special touch.",
        "price": 251,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Egg Chicken Roll",
        "description": "Egg Chicken Roll freshly prepared with quality ingredients and our house special touch.",
        "price": 124,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Double Chicken Roll",
        "description": "Double Chicken Roll freshly prepared with quality ingredients and our house special touch.",
        "price": 192,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
        "isVeg": false,
        "popular": true
      },
      {
        "name": "Cheese Roll",
        "description": "Cheese Roll freshly prepared with quality ingredients and our house special touch.",
        "price": 117,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Tandoori Paneer Roll",
        "description": "Tandoori Paneer Roll freshly prepared with quality ingredients and our house special touch.",
        "price": 263,
        "category": "Rolls",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Masala Fries",
        "description": "Masala Fries freshly prepared with quality ingredients and our house special touch.",
        "price": 188,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Lemon Soda",
        "description": "Lemon Soda freshly prepared with quality ingredients and our house special touch.",
        "price": 191,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "Bihar Litti House",
    "slug": "bihar-litti-house",
    "cuisine": [
      "Bihari",
      "Street Food"
    ],
    "description": "Freshly prepared bihari, street food favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900",
    "banner": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=1400",
    "rating": 4.7,
    "deliveryTime": "27–37 min",
    "deliveryFee": 25,
    "minimumOrder": 199,
    "location": "Boring Road, Patna",
    "menu": [
      {
        "name": "Litti Chokha (2 pcs)",
        "description": "Litti Chokha (2 pcs) freshly prepared with quality ingredients and our house special touch.",
        "price": 118,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Litti Chokha (4 pcs)",
        "description": "Litti Chokha (4 pcs) freshly prepared with quality ingredients and our house special touch.",
        "price": 147,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Sattu Paratha",
        "description": "Sattu Paratha freshly prepared with quality ingredients and our house special touch.",
        "price": 85,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Dal Pitha",
        "description": "Dal Pitha freshly prepared with quality ingredients and our house special touch.",
        "price": 283,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Chana Ghugni",
        "description": "Chana Ghugni freshly prepared with quality ingredients and our house special touch.",
        "price": 130,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Bihari Thali",
        "description": "Bihari Thali freshly prepared with quality ingredients and our house special touch.",
        "price": 209,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Dahi Chura",
        "description": "Dahi Chura freshly prepared with quality ingredients and our house special touch.",
        "price": 162,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Thekua",
        "description": "Thekua freshly prepared with quality ingredients and our house special touch.",
        "price": 139,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "Healthy Bowl Co.",
    "slug": "healthy-bowl-co.",
    "cuisine": [
      "Healthy",
      "Salads"
    ],
    "description": "Freshly prepared healthy, salads favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900",
    "banner": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1400",
    "rating": 4.3,
    "deliveryTime": "22–32 min",
    "deliveryFee": 20,
    "minimumOrder": 149,
    "location": "Patliputra, Patna",
    "menu": [
      {
        "name": "Classic Veg Salad",
        "description": "Classic Veg Salad freshly prepared with quality ingredients and our house special touch.",
        "price": 79,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Paneer Protein Bowl",
        "description": "Paneer Protein Bowl freshly prepared with quality ingredients and our house special touch.",
        "price": 134,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Grilled Chicken Bowl",
        "description": "Grilled Chicken Bowl freshly prepared with quality ingredients and our house special touch.",
        "price": 176,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Sprout Chaat",
        "description": "Sprout Chaat freshly prepared with quality ingredients and our house special touch.",
        "price": 101,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Quinoa Veg Bowl",
        "description": "Quinoa Veg Bowl freshly prepared with quality ingredients and our house special touch.",
        "price": 169,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Fruit Bowl",
        "description": "Fruit Bowl freshly prepared with quality ingredients and our house special touch.",
        "price": 133,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Peanut Chaat",
        "description": "Peanut Chaat freshly prepared with quality ingredients and our house special touch.",
        "price": 188,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Fresh Lime Water",
        "description": "Fresh Lime Water freshly prepared with quality ingredients and our house special touch.",
        "price": 269,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "Kebab & Curry",
    "slug": "kebab-and-curry",
    "cuisine": [
      "Mughlai",
      "North Indian"
    ],
    "description": "Freshly prepared mughlai, north indian favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=900",
    "banner": "https://images.unsplash.com/photo-1544025162-d76694265947?w=1400",
    "rating": 4.5,
    "deliveryTime": "27–37 min",
    "deliveryFee": 20,
    "minimumOrder": 149,
    "location": "Fraser Road, Patna",
    "menu": [
      {
        "name": "Chicken Seekh Kebab",
        "description": "Chicken Seekh Kebab freshly prepared with quality ingredients and our house special touch.",
        "price": 105,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
        "isVeg": false,
        "popular": true
      },
      {
        "name": "Paneer Tikka",
        "description": "Paneer Tikka freshly prepared with quality ingredients and our house special touch.",
        "price": 264,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Chicken Tikka",
        "description": "Chicken Tikka freshly prepared with quality ingredients and our house special touch.",
        "price": 85,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Mutton Seekh Kebab",
        "description": "Mutton Seekh Kebab freshly prepared with quality ingredients and our house special touch.",
        "price": 179,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
        "isVeg": false,
        "popular": true
      },
      {
        "name": "Afghani Chicken",
        "description": "Afghani Chicken freshly prepared with quality ingredients and our house special touch.",
        "price": 169,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Roomali Roti",
        "description": "Roomali Roti freshly prepared with quality ingredients and our house special touch.",
        "price": 159,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Mutton Curry",
        "description": "Mutton Curry freshly prepared with quality ingredients and our house special touch.",
        "price": 188,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Firni",
        "description": "Firni freshly prepared with quality ingredients and our house special touch.",
        "price": 126,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "South Spice",
    "slug": "south-spice",
    "cuisine": [
      "South Indian"
    ],
    "description": "Freshly prepared south indian favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900",
    "banner": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=1400",
    "rating": 4.4,
    "deliveryTime": "37–47 min",
    "deliveryFee": 25,
    "minimumOrder": 199,
    "location": "Boring Road, Patna",
    "menu": [
      {
        "name": "Rava Dosa",
        "description": "Rava Dosa freshly prepared with quality ingredients and our house special touch.",
        "price": 196,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Onion Uttapam",
        "description": "Onion Uttapam freshly prepared with quality ingredients and our house special touch.",
        "price": 277,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Ghee Podi Idli",
        "description": "Ghee Podi Idli freshly prepared with quality ingredients and our house special touch.",
        "price": 98,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Sambar Vada",
        "description": "Sambar Vada freshly prepared with quality ingredients and our house special touch.",
        "price": 88,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Pesarattu",
        "description": "Pesarattu freshly prepared with quality ingredients and our house special touch.",
        "price": 91,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Curd Rice",
        "description": "Curd Rice freshly prepared with quality ingredients and our house special touch.",
        "price": 120,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Lemon Rice",
        "description": "Lemon Rice freshly prepared with quality ingredients and our house special touch.",
        "price": 162,
        "category": "Meals",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Filter Coffee",
        "description": "Filter Coffee freshly prepared with quality ingredients and our house special touch.",
        "price": 230,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "The Waffle Stop",
    "slug": "the-waffle-stop",
    "cuisine": [
      "Desserts",
      "Bakery"
    ],
    "description": "Freshly prepared desserts, bakery favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900",
    "banner": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1400",
    "rating": 4.3,
    "deliveryTime": "37–47 min",
    "deliveryFee": 15,
    "minimumOrder": 99,
    "location": "Bailey Road, Patna",
    "menu": [
      {
        "name": "Classic Waffle",
        "description": "Classic Waffle freshly prepared with quality ingredients and our house special touch.",
        "price": 261,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Chocolate Waffle",
        "description": "Chocolate Waffle freshly prepared with quality ingredients and our house special touch.",
        "price": 95,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Strawberry Waffle",
        "description": "Strawberry Waffle freshly prepared with quality ingredients and our house special touch.",
        "price": 137,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Nutella Pancake",
        "description": "Nutella Pancake freshly prepared with quality ingredients and our house special touch.",
        "price": 140,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Chocolate Brownie",
        "description": "Chocolate Brownie freshly prepared with quality ingredients and our house special touch.",
        "price": 195,
        "category": "Desserts",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Oreo Shake",
        "description": "Oreo Shake freshly prepared with quality ingredients and our house special touch.",
        "price": 133,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Vanilla Scoop",
        "description": "Vanilla Scoop freshly prepared with quality ingredients and our house special touch.",
        "price": 201,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Chocolate Sundae",
        "description": "Chocolate Sundae freshly prepared with quality ingredients and our house special touch.",
        "price": 269,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "Fresh Juice Bar",
    "slug": "fresh-juice-bar",
    "cuisine": [
      "Beverages",
      "Healthy"
    ],
    "description": "Freshly prepared beverages, healthy favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=900",
    "banner": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1400",
    "rating": 4.2,
    "deliveryTime": "37–47 min",
    "deliveryFee": 15,
    "minimumOrder": 99,
    "location": "Rajendra Nagar, Patna",
    "menu": [
      {
        "name": "Mango Shake",
        "description": "Mango Shake freshly prepared with quality ingredients and our house special touch.",
        "price": 222,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Banana Shake",
        "description": "Banana Shake freshly prepared with quality ingredients and our house special touch.",
        "price": 264,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Strawberry Shake",
        "description": "Strawberry Shake freshly prepared with quality ingredients and our house special touch.",
        "price": 124,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Sweet Lassi",
        "description": "Sweet Lassi freshly prepared with quality ingredients and our house special touch.",
        "price": 88,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Mango Lassi",
        "description": "Mango Lassi freshly prepared with quality ingredients and our house special touch.",
        "price": 117,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Fresh Orange Juice",
        "description": "Fresh Orange Juice freshly prepared with quality ingredients and our house special touch.",
        "price": 237,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Watermelon Juice",
        "description": "Watermelon Juice freshly prepared with quality ingredients and our house special touch.",
        "price": 240,
        "category": "Beverages",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Cold Coffee",
        "description": "Cold Coffee freshly prepared with quality ingredients and our house special touch.",
        "price": 204,
        "category": "South Indian",
        "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  },
  {
    "name": "Tandoori Treats",
    "slug": "tandoori-treats",
    "cuisine": [
      "North Indian",
      "Tandoori"
    ],
    "description": "Freshly prepared north indian, tandoori favourites, delivered with care.",
    "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900",
    "banner": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=1400",
    "rating": 4.5,
    "deliveryTime": "37–47 min",
    "deliveryFee": 15,
    "minimumOrder": 99,
    "location": "Kankarbagh, Patna",
    "menu": [
      {
        "name": "Tandoori Chicken",
        "description": "Tandoori Chicken freshly prepared with quality ingredients and our house special touch.",
        "price": 287,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        "isVeg": false,
        "popular": true
      },
      {
        "name": "Paneer Tikka",
        "description": "Paneer Tikka freshly prepared with quality ingredients and our house special touch.",
        "price": 264,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Malai Chaap",
        "description": "Malai Chaap freshly prepared with quality ingredients and our house special touch.",
        "price": 280,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Tandoori Mushroom",
        "description": "Tandoori Mushroom freshly prepared with quality ingredients and our house special touch.",
        "price": 166,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        "isVeg": true,
        "popular": true
      },
      {
        "name": "Chicken Tangdi",
        "description": "Chicken Tangdi freshly prepared with quality ingredients and our house special touch.",
        "price": 156,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Hara Bhara Kebab",
        "description": "Hara Bhara Kebab freshly prepared with quality ingredients and our house special touch.",
        "price": 211,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        "isVeg": false,
        "popular": false
      },
      {
        "name": "Butter Naan",
        "description": "Butter Naan freshly prepared with quality ingredients and our house special touch.",
        "price": 175,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        "isVeg": true,
        "popular": false
      },
      {
        "name": "Dal Tadka",
        "description": "Dal Tadka freshly prepared with quality ingredients and our house special touch.",
        "price": 178,
        "category": "Main Course",
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
        "isVeg": true,
        "popular": false
      }
    ]
  }
];
const docs = await Restaurant.create(restaurants.map(r => ({...r, owner: owner._id})));
console.log(`Seeded ${docs.length} restaurants and ${docs.reduce((n,r)=>n+r.menu.length,0)} food items. Demo password: Demo@123`);
await mongoose.disconnect();
