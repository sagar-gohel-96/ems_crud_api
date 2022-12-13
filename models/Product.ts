import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'Please enter a name'],
    unique: true,
  },
  slug: String,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: [false, 'Please enter a description'],
    maxlength: [500, 'Description can not exceed 500 characters'],
  },
  price: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cant be more than 10'],
  },
  stock: {
    type: Number,
    required: [true, 'stock must be at least 1'],
  },
  brand: {
    type: String,
    maxlength: [20, 'Please enter valid phone number'],
  },
  category: {
    type: [String],
    required: true,
    enum: [
      'smartphones',
      'laptops',
      'fragrances',
      'skincare',
      'groceries',
      'home-decoration',
      'furniture',
      'tops',
      'womens-dresses',
      'womens-shoes',
      'mens-shirts',
      'mens-shoes',
      'mens-watches',
      'womens-watches',
      'womens-bags',
      'womens-jewellery',
      'sunglasses',
      'automotive',
      'motorcycle',
      'lighting',
    ],
  },
  thumbnail: {
    type: String,
  },
  images: {
    type: [String],
  },
  name:{
    type:String
  },
  city:{
    type:String
  }
});

module.exports = mongoose.model('products', ProductSchema);
