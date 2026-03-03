const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

router.post('/users', usersController.createUser);

module.exports = router;