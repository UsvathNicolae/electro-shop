
const dbConnection = require('../configs/sequelize/connection');
const { MODELS } = require('../utils/constants');

const BTModel = require('../models/BusinessTrip');
const ReceiptModel = require('../models/Receipt');
const ReturnModel = require('../models/Return');

const BT = BTModel(dbConnection, Sequelize);
const Receipt = ReceiptModel(dbConnection, Sequelize);
const Return = ReturnModel(dbConnection, Sequelize);

Return.hasOne(BT, { as: MODELS.BUSINESS_TRIP, foreignKey: 'returnId' });

Return.hasMany(Receipt, { as: MODELS.RECEIPT, foreignKey: 'returnId' });

module.exports = { BT, Return, Receipt };
