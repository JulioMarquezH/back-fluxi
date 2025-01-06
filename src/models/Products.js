const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    image: { type: String },
    website: { type: String },
    sku: { type: String },
    name: { type: String },
    guideName: { type: String },
    weight: { type: Number },
    length: { type: Number },
    width: { type: Number },
    high: { type: Number },
    price: { type: Number },
    suggested_price: { type: Number },
    type: { type: String },
    category: { type: String },
    description: { type: String },
    store_id: { type: String },
    stock: { type: Number },
    mail: { type: String },
    amount: { type: Number },
    is_private: { type: Boolean },
    user_id: { type: String },
    incomplete_order: {
        days: { type: Number },
        observation: { type: String },
        enabled: { type: Boolean },
    },
    malfunction: {
        days: { type: Number },
        observation: { type: String },
        enabled: { type: Boolean },
    },
    broken_product: {
        days: { type: Number },
        observation: { type: String },
        enabled: { type: Boolean },
    },
    different_order: {
        days: { type: Number },
        observation: { type: String },
        enabled: { type: Boolean },
    },
    status: { type: String },
    __v: { type: Number },
});

const Products = mongoose.model('products', productsSchema);

module.exports = Products;
