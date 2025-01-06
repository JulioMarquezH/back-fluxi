const express = require('express');
const { getOrders, updateOrders, createOrder } = require('../controllers/ordersController');

const router = express.Router();

router.get('/', getOrders);
router.put('/', updateOrders);
router.post('/', createOrder);

module.exports = router;

