const express = require('express');
const { getOrders, updateOrders, createOrder, deleteOrder } = require('../controllers/ordersController');

const router = express.Router();

router.get('/', getOrders);
router.put('/', updateOrders);
router.post('/', createOrder);
router.delete('/', deleteOrder);

module.exports = router;

