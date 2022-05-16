const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');
const checkAuth = require("../middleware/check-auth");

// routers

router.get('/get', checkAuth, userController.fetchAll);

router.get('/getNumberOfProducts', checkAuth, userController.getNoProducts);

router.get('/getCartProducts', checkAuth, userController.getCartProducts)

router.delete('/deleteCartItem/:productId', checkAuth, userController.deleteFromCart)

router.post('/post', userController.postUser);

router.post('/login', userController.loginUser);

router.put('/add', checkAuth, userController.addToCart);

router.put('/put/:id', checkAuth, userController.updateUser);


router.delete('/delete/:id', checkAuth, userController.deleteUser);

module.exports = router;
