const express = require('express');
const { getStore, updateStore, createStore, deleteStore } = require('../controllers/storeController');

const router = express.Router();

router.get('/', getStore);
router.put('/', updateStore);
router.post('/', createStore);
router.delete('/', deleteStore);

module.exports = router;

