const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema();

const Orders = mongoose.model('orders', ordersSchema);

module.exports = Orders;

