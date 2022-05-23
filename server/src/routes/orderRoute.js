const express = require("express");
const router = express.Router();

const orderController = require("../controller/orderController");
const checkAuth = require("../middleware/check-auth");

router.get("/get", checkAuth, orderController.fetchAllOrders);

router.get("/get/:id", checkAuth, orderController.fetchOrderById);

router.post("/post", checkAuth, orderController.postOrder);

module.exports = router;
