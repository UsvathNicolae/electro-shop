const {
  fetchAll,
  fetchById,
  createOrder,
} = require("../repository/orderRepository");
const { fetchUserById, putUserDB } = require("../repository/userRepository");
const { getCartProductsService } = require("../services/userService");

const fetchOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await fetchById(id);
    if (order) {
      res.status(200).json(order.dataValues);
    }
  } catch (e) {
    res.status(500).json({
      error: {
        message: e.message,
      },
    });
  }
};

const fetchAllOrders = async (req, res) => {
  const { userId } = req.userData;
  try {
    const orders = await fetchAll(userId);
    if (orders) {
      res.status(200).json(orders);
    }
  } catch (e) {
    res.status(500).json({
      error: {
        message: e.message,
      },
    });
  }
};

const postOrder = async (req, res) => {
  const { userId } = req.userData

  let totalPrice = 0;
  try {
    const cartProducts = await getCartProductsService(userId);
    for(product of cartProducts){
      totalPrice += product.price
    }
    const response = await fetchUserById(userId)

    const username = response.dataValues.username

    const title = `Order for user ${username}`;

    console.log({
      userId: userId,
      title: title,
      totalPrice: totalPrice,
    })
    const result = await createOrder({
      title: title,
      totalPrice: totalPrice,
      userId: userId,
    });

    const clearCart = await putUserDB(userId, { productIds: ","}) //nu umblam aici :)
    if (result,clearCart) {
      res.status(200).json({
        message: "Order placed succesfully!",
      });
    }
    
  } catch (e) {
    console.log(e.message)
    res.status(500).json({
      error: {
        message: e.message,
      },
    });
  }
};

module.exports = { fetchOrderById, fetchAllOrders, postOrder };
