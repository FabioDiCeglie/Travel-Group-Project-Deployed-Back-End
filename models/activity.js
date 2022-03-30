"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      activity.belongsTo(models.city, { foreignKey: "cityId" });
    }
  }
  activity.init(
    {
      location: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      lng: DataTypes.FLOAT,
      lat: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "activity",
    }
  );
  return activity;
};
