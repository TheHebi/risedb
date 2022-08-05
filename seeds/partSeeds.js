const { Part } = require("../models");

const partData = [
  {
    name: "Aknosom Scale+",
    targetReward: 21,
    captureReward: 21,
    brokenPartReward: 100,
    carve: 41,
    droppedMaterial: 70,
    rank:"High Rank"
  },
];

const seedParts = () => Part.bulkCreate(partData)
module.exports = seedParts