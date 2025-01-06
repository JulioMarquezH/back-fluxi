const express = require('express');
const { getUsers, updateUser, postLogin } = require('../controllers/usersController');

const router = express.Router();

router.get('/', getUsers);
router.post('/login', postLogin);
router.put('/', updateUser);

module.exports = router;

