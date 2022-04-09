const Sequelize = require('sequelize');
const sequelize = require('../configs/sequelize/connection');
const PRODUCT = require('../models/Product')(sequelize, Sequelize.DataTypes);

const fetchAllProducts = () => {
    return PRODUCT.findAll({ attributes: { exclude: ['createdAt','updatedAt'] } });
}

const postProductDB = (payload) => {
    return PRODUCT.create(payload);
}

const putProductDB = (id, payload) => {
    return PRODUCT.update(payload, {where: { id: id }});
}

const deleteProductDB = (id) => {
    return PRODUCT.destroy({where: { id: id }});
}

module.exports = { fetchAllProducts, postProductDB, putProductDB, deleteProductDB }

