const Sequelize = require("sequelize");
const sequelize = require("../configs/sequelize/connection");
const ORDER = require("../models/Order")(sequelize, Sequelize.DataTypes);

const fetchAll = (userId) => {
  return ORDER.findAll({ where: { userId: userId} });
};

const fetchById = (id) => {
  return ORDER.findOne({ where: { id: id } });
};

const createOrder = (payload) => {
  return ORDER.create(payload);
};

module.exports = { fetchAll, fetchById, createOrder };
