"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class picture extends Model {
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
  picture.init(
    {
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "picture",
    }
  );
  return picture;
};
