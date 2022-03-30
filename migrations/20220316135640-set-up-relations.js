"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("museums", "cityId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cities",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("activities", "cityId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cities",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("pictures", "cityId", {
      type: Sequelize.INTEGER,
      references: {
        model: "cities",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("museums", "cityId");
    await queryInterface.removeColumn("activities", "cityId");
    await queryInterface.removeColumn("pictures", "cityId");
  },
};
