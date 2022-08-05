const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Monster extends Model {}

Monster.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);

module.exports = Monster;
