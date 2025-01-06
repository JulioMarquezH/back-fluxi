const mongoose = require('mongoose');

// Definición del esquema para los productos
const productsSchema = new mongoose.Schema({
  image: { type: String},
  website: { type: String},
  sku: { type: String},
  name: { type: String},
  price: { type: Number},
  stock: { type: Number},
  category: { type: String},
  status: { type: String},
  store_id: { type: String },
  user_id: { type: String },
});

const Products = mongoose.model('products', productsSchema);

module.exports = Products;
