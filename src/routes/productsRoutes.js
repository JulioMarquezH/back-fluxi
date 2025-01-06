const express = require('express');
const { getProducts, putProductById } = require('../controllers/productsController');

const router = express.Router();

router.get('/', getProducts);
router.put('/id', putProductById);

module.exports = router;

