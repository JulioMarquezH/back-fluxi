const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema();

const Stores = mongoose.model('store', storeSchema, 'store');

module.exports = Stores;


