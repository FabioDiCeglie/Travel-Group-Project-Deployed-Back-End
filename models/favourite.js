"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class favourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      favourite.belongsTo(models.user, { foreignKey: "user_id" });
      favourite.belongsTo(models.city, { foreignKey: "city_id" });
    }
  }
  favourite.init(
    {
      user_id: DataTypes.INTEGER,
      city_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "favourite",
    }
  );
  return favourite;
};
