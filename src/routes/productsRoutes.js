const express = require('express');
const { getProducts, updateProduct, createProduct } = require('../controllers/productsController');

const router = express.Router();

router.get('/', getProducts);
router.put('/', updateProduct);
router.post('/', createProduct);

module.exports = router;

