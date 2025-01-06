const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    name: { type: String },
    user_id: { type: String },
    city_id: { type: Number },
    address: { type: String },
    phone: { type: String },
    warehouse_white_brand: { type: Boolean },
    created_by: { type: String },
    created_at: { type: Date },
    supplier: { type: String },
    department: { type: String },
    city_name: { type: String },
});

const Stores = mongoose.model('store', storeSchema, 'store');

module.exports = Stores;
