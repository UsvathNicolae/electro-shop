const Sequelize = require('sequelize');
const dbConnection = require('../configs/sequelize/connection');

const UserModel = require('./User');
const ProductModel = require('.Product');
const OrderModel = require('./Order')

const USER = UserModel(dbConnection, Sequelize);
const PRODUCT = ProductModel(dbConnection, Sequelize);
const ORDER = OrderModel(dbConnection,Sequelize)

USER.hasMany(PRODUCT, { as: 'User', foreignKey: 'productId' });
USER.hasMany(ORDER, { foreignKey: 'userId'})

module.exports = { USER, ORDER };
