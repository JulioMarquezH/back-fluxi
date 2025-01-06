const express = require('express');
const { getProducts, updateProduct, createProduct, deleteProduct } = require('../controllers/productsController');

const router = express.Router();

router.get('/', getProducts);
router.put('/', updateProduct);
router.post('/', createProduct);
router.delete('/', deleteProduct);

module.exports = router;

