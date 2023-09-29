const express = require('express');
const router = express.Router();
const userController = require('./userController');

router.post('/post/users', userController.createUser);
router.get('/users', userController.getUsers);

module.exports = router;
