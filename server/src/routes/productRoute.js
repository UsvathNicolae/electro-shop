const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');
const checkAuth = require('../middleware/check-auth');
// routers

router.get('/get', checkAuth, productController.fetchAll);

router.post('/post', checkAuth, productController.postProduct);

router.put('/put/:id', checkAuth, productController.updateProduct);

router.delete('/delete/:id', checkAuth, productController.deleteProduct);

module.exports = router;