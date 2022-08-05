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
      type: DataTypes.TEXT,
    },
    img: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
  }
);

module.exports = Monster;
