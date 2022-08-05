const { Part } = require("../models");

const partData = [
  {
    MonsterId:1,
    RankId:2,
    name: "Aknosom Scale+",
    targetReward: 21,
    captureReward: 21,
    brokenPartReward: 100,
    carve: 41,
    droppedMaterial: 70,
  },
];

const seedParts = () => Part.bulkCreate(partData)
module.exports = seedParts