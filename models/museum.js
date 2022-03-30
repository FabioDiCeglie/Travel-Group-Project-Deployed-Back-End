"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class museum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.city, { foreignKey: "cityId" });
    }
  }
  museum.init(
    {
      location: DataTypes.STRING,
      description: DataTypes.TEXT,
      priceTicket: DataTypes.INTEGER,
      image: DataTypes.STRING,
      lng: DataTypes.FLOAT,
      lat: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "museum",
    }
  );
  return museum;
};
