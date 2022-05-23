const { fetchUserById } = require("../repository/userRepository");
const { fetchById } = require("../repository/productRepository")

const getCartProductsService = async (userId) => {

    try{
        let user = await fetchUserById(userId)
        user = user.dataValues
        let cartItems
        if(user.productIds !== null || user.productIds !== ''){
            let ids = user.productIds.replace(/,/g,'').split("")
            cartItems = await Promise.all(ids.map(productId => {
                return fetchById(productId).then((product => {
                    return {
                        productId: productId,
                        productName: product.productName,
                        price: product.price,
                    }
                }))
            }) )
        }

        return cartItems

    } catch (err){
        console.log(err.message)
    }

}

module.exports = { getCartProductsService }