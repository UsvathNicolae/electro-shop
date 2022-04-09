const express = require('express');
const router = express.Router();

const userController = require('../controller/userController')
const checkAuth = require("../middleware/check-auth");

// routers

router.get('/get', checkAuth, userController.fetchAll)

router.post('/post', userController.postUser)

router.put('/put/:id', checkAuth, userController.updateUser)

router.delete('/delete/:id', checkAuth, userController.deleteUser)

module.exports = router
