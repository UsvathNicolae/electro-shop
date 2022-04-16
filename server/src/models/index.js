const Sequelize = require('sequelize');
const dbConnection = require('../configs/sequelize/connection');

const UserModel = require('../models/User');
const ProductModel = require('../models/Product');

const USER = UserModel(dbConnection, Sequelize);
const PRODUCT = ProductModel(dbConnection, Sequelize);

USER.hasMany(PRODUCT, { as: 'User', foreignKey: 'productId' });

module.exports = { USER };
