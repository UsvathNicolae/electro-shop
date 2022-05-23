"use strict";

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) =>
      queryInterface.addColumn("Orders", "userId", {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: "Users",
          },
          key: "id",
        },
      })
    );
  },

  down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) =>
      queryInterface.removeColumn("Orders", "userId")
    );
  },
};
