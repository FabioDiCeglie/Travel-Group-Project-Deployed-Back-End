"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      city.belongsToMany(models.user, {
        through: "favourite",
        foreignKey: "city_id",
      });
      city.hasMany(models.activity, { foreignKey: "cityId" });
      city.hasMany(models.museum, { foreignKey: "cityId" });
      city.hasMany(models.picture, { foreignKey: "cityId" });
      city.hasMany(models.review, { foreignKey: "cityId" });
    }
  }
  city.init(
    {
      lng: DataTypes.FLOAT,
      lat: DataTypes.FLOAT,
      location: DataTypes.STRING,
      description: DataTypes.TEXT,
      restriction: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "city",
    }
  );
  return city;
};
