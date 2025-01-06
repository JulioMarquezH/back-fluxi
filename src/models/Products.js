const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema();

const Products = mongoose.model('products', productsSchema);

module.exports = Products;

