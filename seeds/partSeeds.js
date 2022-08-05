const { Part } = require("../models");

const partData = [
  {
    MonsterId:1,
    RankId:1,
    name: "Aknosom Scale",
    targetReward: 24,
    captureReward: 24,
    brokenPartReward: 30,
    carve: 43,
    droppedMaterial:35
  },
  {
    MonsterId:1,
    RankId:1,
    name: "Aknosm Feather",
    targetReward: 32,
    captureReward: 39,
    brokenPartReward: 100,
    carve: 31,
    droppedMaterial:15
  },
  {
    MonsterId:1,
    RankId:1,
    name: "Aknosom Beak",
    targetReward: 8,
    captureReward: 12,
    brokenPartReward: 70,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:1,
    RankId:1,
    name: "Flame Sac",
    targetReward: 24,
    captureReward: 20,
    brokenPartReward: 0,
    carve: 21,
    droppedMaterial:0
  },
  {
    MonsterId:1,
    RankId:1,
    name: "Monster Bone M",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:1,
    RankId:1,
    name: "Aknosom Crest",
    targetReward: 0,
    captureReward: 5,
    brokenPartReward: 100,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:1,
    RankId:1,
    name: "Wyvern Tear",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:50
  },
  {
    MonsterId:1,
    RankId:2,
    name: "Aknosom Scale+",
    targetReward: 21,
    captureReward: 21,
    brokenPartReward: 25,
    carve: 41,
    droppedMaterial:34
  },
  {
    MonsterId:1,
    RankId:2,
    name: "Aknosom Feather+",
    targetReward: 30,
    captureReward: 36,
    brokenPartReward: 100,
    carve: 29,
    droppedMaterial:15
  },
  {
    MonsterId:1,
    RankId:2,
    name: "Aknosom Beak",
    targetReward: 12,
    captureReward: 15,
    brokenPartReward: 70,
    carve: 8,
    droppedMaterial:0
  },
  {
    MonsterId:1,
    RankId:2,
    name: "Inferno Sac",
    targetReward: 24,
    captureReward: 18,
    brokenPartReward: 0,
    carve: 19,
    droppedMaterial:0
  },
  {
    MonsterId:1,
    RankId:2,
    name: "Bird Wyvern Gem",
    targetReward: 3,
    captureReward: 5,
    brokenPartReward: 5,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:1,
    RankId:2,
    name: "Monster Keenbone",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:1,
    RankId:2,
    name: "Aknosom Crest+",
    targetReward: 0,
    captureReward: 5,
    brokenPartReward: 100,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:1,
    RankId:2,
    name: "Wyvern Tear",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:30
  },
  {
    MonsterId:1,
    RankId:2,
    name: "Large Wyver Tear",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:20
  },
  {
    MonsterId:1,
    RankId:3,
    name: "Aknosom Shard",
    targetReward: 21,
    captureReward: 20,
    brokenPartReward: 25,
    carve: 39,
    droppedMaterial:34
  },
  {
    MonsterId:1,
    RankId:3,
    name: "Aknosom Plume",
    targetReward: 30,
    captureReward: 33,
    brokenPartReward: 100,
    carve: 27,
    droppedMaterial:15
  },
  {
    MonsterId:1,
    RankId:3,
    name: "Aknosom Burnbeak",
    targetReward: 12,
    captureReward: 15,
    brokenPartReward: 70,
    carve: 8,
    droppedMaterial:0
  },
  {
    MonsterId:1,
    RankId:3,
    name: "Conflagrant Sac",
    targetReward: 24,
    captureReward: 17,
    brokenPartReward: 0,
    carve: 18,
    droppedMaterial:0
  },
  {
    MonsterId:1,
    RankId:3,
    name: "Fey Wyvern Gem",
    targetReward: 3,
    captureReward: 4,
    brokenPartReward: 5,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:1,
    RankId:3,
    name: "Monster Toughbone",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:1,
    RankId:3,
    name: "Aknosom Head-Crest",
    targetReward: 0,
    captureReward: 5,
    brokenPartReward: 100,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:1,
    RankId:3,
    name: "Bird Wyvern Gem",
    targetReward: 0,
    captureReward: 6,
    brokenPartReward: 0,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:1,
    RankId:3,
    name: "Wyvern Tear",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:20
  },
  {
    MonsterId:1,
    RankId:3,
    name: "Large Wyvern Tear",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:30
  },
  {
    MonsterId:1,
    RankId:3,
    name: "Afflicted Monster Bone",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:2,
    RankId:1,
    name: "Almudron Scale",
    targetReward: 16,
    captureReward: 18,
    brokenPartReward: 70,
    carve: 10,
    droppedMaterial:19
  },
  {
    MonsterId:2,
    RankId:1,
    name: "Almudron Shell",
    targetReward: 27,
    captureReward: 23,
    brokenPartReward: 30,
    carve: 27,
    droppedMaterial:28
  },
  {
    MonsterId:2,
    RankId:1,
    name: "Almudron Fin",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 17,
    carve: 22,
    droppedMaterial:0
  },
  {
    MonsterId:2,
    RankId:1,
    name: "Almudron Whisker",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:2,
    RankId:1,
    name: "Almudron Tail",
    targetReward: 8,
    captureReward: 12,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:2,
    RankId:1,
    name: "Golden Muck",
    targetReward: 22,
    captureReward: 13,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:30
  },
  {
    MonsterId:2,
    RankId:1,
    name: "Almudron Plate",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:2,
    RankId:1,
    name: "Almudron Claw",
    targetReward: 0,
    captureReward: 31,
    brokenPartReward: 90,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:2,
    RankId:1,
    name: "Wyvern Tear",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:50
  },
  {
    MonsterId:2,
    RankId:2,
    name: "Almudron Scale+",
    targetReward: 17,
    captureReward: 15,
    brokenPartReward: 70,
    carve: 36,
    droppedMaterial:18
  },
  {
    MonsterId:2,
    RankId:2,
    name: "Almudron Shell+",
    targetReward: 28,
    captureReward: 21,
    brokenPartReward: 30,
    carve: 26,
    droppedMaterial:28
  },
  {
    MonsterId:2,
    RankId:2,
    name: "Almudron Fin+",
    targetReward: 16,
    captureReward: 0,
    brokenPartReward: 12,
    carve: 22,
    droppedMaterial:0
  },
  {
    MonsterId:2,
    RankId:2,
    name: "Almudron Whisker+",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:2,
    RankId:2,
    name: "Golden Sludge",
    targetReward: 23,
    captureReward: 13,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:28
  },
  {
    MonsterId:2,
    RankId:2,
    name: "Almudron Plate",
    targetReward: 5,
    captureReward: 5,
    brokenPartReward: 5,
    carve: 3,
    droppedMaterial:3
  },
  {
    MonsterId:2,
    RankId:2,
    name: "Golden Almudron Orb",
    targetReward: 1,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:2,
    RankId:2,
    name: "Almudron Claw+",
    targetReward: 0,
    captureReward: 31,
    brokenPartReward: 90,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:2,
    RankId:2,
    name: "Almudron Tail",
    targetReward: 0,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:2,
    RankId:2,
    name: "Wyvern Tear",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:2,
    RankId:2,
    name: "Large WWyvern Tear",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:40
  },
  {
    MonsterId:2,
    RankId:3,
    name: "Almudron Shard",
    targetReward: 16,
    captureReward: 15,
    brokenPartReward: 70,
    carve: 35,
    droppedMaterial:18
  },
  {
    MonsterId:2,
    RankId:3,
    name: "Almudron Cortex",
    targetReward: 26,
    captureReward: 21,
    brokenPartReward: 30,
    carve: 26,
    droppedMaterial:28
  },
  {
    MonsterId:2,
    RankId:3,
    name: "Large Almudron Fin",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 12,
    carve: 21,
    droppedMaterial:0
  },
  {
    MonsterId:2,
    RankId:3,
    name: "Almudron Ascetic Whisker",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:2,
    RankId:3,
    name: "Almudron Lashtail",
    targetReward: 6,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:2,
    RankId:3,
    name: "Pure Golden Sludge",
    targetReward: 21,
    captureReward: 13,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:28
  },
  {
    MonsterId:2,
    RankId:3,
    name: "Golden Almudron Orb",
    targetReward: 4,
    captureReward: 5,
    brokenPartReward: 5,
    carve: 4,
    droppedMaterial:3
  },
  {
    MonsterId:2,
    RankId:3,
    name: "Almudron Mantle",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:2,
    RankId:3,
    name: "Almudron Hardclaw",
    targetReward: 0,
    captureReward: 31,
    brokenPartReward: 90,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:2,
    RankId:3,
    name: "Wyvern Tear",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:5
  },
  {
    MonsterId:2,
    RankId:3,
    name: "Large Wyvern Tear",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:45
  },
  {
    MonsterId:2,
    RankId:3,
    name: "Afflictged Claw",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:3,
    RankId:1,
    name: "",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
];

const seedParts = () => Part.bulkCreate(partData)
module.exports = seedParts