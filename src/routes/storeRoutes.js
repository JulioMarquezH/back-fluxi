const express = require('express');
const { getStore } = require('../controllers/storeController');

const router = express.Router();

router.get('/', getStore);

module.exports = router;

