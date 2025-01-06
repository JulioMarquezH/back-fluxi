const express = require('express');
const { getStore, updateStore, createStore } = require('../controllers/storeController');

const router = express.Router();

router.get('/', getStore);
router.put('/', updateStore);
router.post('/', createStore);

module.exports = router;

