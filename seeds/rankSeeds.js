const { Rank } = require("../models");

const rankData = [
  {
    name: "Low Rank"
  },
  {
    name: "High Rank"
  },
  {
    name: "Master Rank"
  },
];

const seedRanks = () => Rank.bulkCreate(rankData)
module.exports = seedRanks