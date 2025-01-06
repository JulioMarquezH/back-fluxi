const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    product_name: {
        type: String,
    },
    order_date: {
        type: Date,
    },
    order_status: {
        type: String,
    },
    carrier: {
        type: String,
    },
    warehouse: {
        type: String,
    },
    printed: {
        type: Boolean,
    },
    label: {
        type: String,
    },
    details: {
        type: String,
    },
    actions: {
        type: String,
    },
    user_id: {
        type: String, 
    },
}, {
    timestamps: true,
});

const Orders = mongoose.model('orders', ordersSchema);

module.exports = Orders;
