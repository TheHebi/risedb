const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Part extends Model {}

Part.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    targetReward: {
      type: DataTypes.INTEGER,
    },
    captureReward: {
      type: DataTypes.INTEGER,
    },
    brokenPartReward: {
      type: DataTypes.INTEGER,
    },
    carve: {
      type: DataTypes.INTEGER,
    },
    droppedMaterial: {
      type: DataTypes.INTEGER,
    }
  },
  {
    sequelize,
  }
);

module.exports = Part;
