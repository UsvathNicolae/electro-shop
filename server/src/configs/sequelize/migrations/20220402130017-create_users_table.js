'use strict'

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role:{
        type: Sequelize.ENUM,
        values: ['USER', 'ADMIN'],
        defaultValue: 'USER',
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      productIds: {
        type: Sequelize.STRING,
      }
    });
  },

  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  },
};
