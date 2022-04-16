const Sequelize = require('sequelize');
const sequelize = require('../configs/sequelize/connection');
const USER = require('../models/User')(sequelize, Sequelize.DataTypes);

const fetchAllUsers = () => {
    return USER.findAll({ attributes: { exclude: ['createdAt','updatedAt'] } });
}

const fetchUserByEmail = (email) => {
    return USER.findOne({where: { email: email }});
}

const postUserDB = (payload) => {
    return USER.create(payload);
}

const putUserDB = (id, payload) => {
    return USER.update(payload, {where: { id: id }});
}

const deleteUserDB = (id) => {
    return USER.destroy({where: { id: id }});
}

module.exports = { fetchAllUsers, postUserDB, putUserDB, deleteUserDB, fetchUserByEmail }

