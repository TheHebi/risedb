const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Rank extends Model {}

Rank.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
  }
);

module.exports = Rank;