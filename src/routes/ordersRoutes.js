const express = require('express');
const { getOrders, updateOrders } = require('../controllers/ordersController');

const router = express.Router();

router.get('/', getOrders);
router.put('/', updateOrders);

module.exports = router;

