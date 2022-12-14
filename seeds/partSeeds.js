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
    name: "Afflicted Claw",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:3,
    RankId:1,
    name: "Anjanath Pelt",
    targetReward: 20,
    captureReward: 21,
    brokenPartReward: 0,
    carve: 27,
    droppedMaterial:30
  },
  {
    MonsterId:3,
    RankId:1,
    name: "Anjanath Scale",
    targetReward: 35,
    captureReward: 31,
    brokenPartReward: 60,
    carve: 31,
    droppedMaterial:39
  },
  {
    MonsterId:3,
    RankId:1,
    name: "Anjanath Nosebone",
    targetReward: 19,
    captureReward: 0,
    brokenPartReward: 35,
    carve: 18,
    droppedMaterial:0
  },
  {
    MonsterId:3,
    RankId:1,
    name: "Anjanath Tail",
    targetReward: 9,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:3,
    RankId:1,
    name: "Anjanath Plate",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:3,
    RankId:1,
    name: "Flame Sac",
    targetReward: 15,
    captureReward: 10,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:3,
    RankId:1,
    name: "Anjanath Fang",
    targetReward: 0,
    captureReward: 23,
    brokenPartReward: 62,
    carve: 23,
    droppedMaterial:10
  },
  {
    MonsterId:3,
    RankId:2,
    name: "Anjanath Pelt+",
    targetReward: 20,
    captureReward: 21,
    brokenPartReward: 0,
    carve: 26,
    droppedMaterial:30
  },
  {
    MonsterId:3,
    RankId:2,
    name: "Anjanath Scale+",
    targetReward: 34,
    captureReward: 31,
    brokenPartReward: 60,
    carve: 30,
    droppedMaterial:36
  },
  {
    MonsterId:3,
    RankId:2,
    name: "Anjanath Nosebone+",
    targetReward: 18,
    captureReward: 0,
    brokenPartReward: 30,
    carve: 17,
    droppedMaterial:0
  },
  {
    MonsterId:3,
    RankId:2,
    name: "Anjanath Tail",
    targetReward: 6,
    captureReward: 8,
    brokenPartReward: 0,
    carve: 65,
    droppedMaterial:0
  },
  {
    MonsterId:3,
    RankId:2,
    name: "Anjanath Plate",
    targetReward: 5,
    captureReward: 7,
    brokenPartReward: 7,
    carve: 4,
    droppedMaterial:3
  },
  {
    MonsterId:3,
    RankId:2,
    name: "Anjanath Gem",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:3,
    RankId:2,
    name: "Inferno Sac",
    targetReward: 15,
    captureReward: 7,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:3,
    RankId:2,
    name: "Anjanath Fang+",
    targetReward: 0,
    captureReward: 23,
    brokenPartReward: 60,
    carve: 22,
    droppedMaterial:10
  },
  {
    MonsterId:3,
    RankId:3,
    name: "Anjanath Fur",
    targetReward: 20,
    captureReward: 21,
    brokenPartReward: 0,
    carve: 26,
    droppedMaterial:30
  },
  {
    MonsterId:3,
    RankId:3,
    name: "Anjanath Shard",
    targetReward: 34,
    captureReward: 31,
    brokenPartReward: 60,
    carve: 30,
    droppedMaterial:36
  },
  {
    MonsterId:3,
    RankId:3,
    name: "Heavy Anjanath Nosebone",
    targetReward: 18,
    captureReward: 0,
    brokenPartReward: 32,
    carve: 17,
    droppedMaterial:0
  },
  {
    MonsterId:3,
    RankId:3,
    name: "Anjanath Lash",
    targetReward: 6,
    captureReward: 8,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:3,
    RankId:3,
    name: "Anjanath Gem",
    targetReward: 5,
    captureReward: 7,
    brokenPartReward: 6,
    carve: 4,
    droppedMaterial:3
  },
  {
    MonsterId:3,
    RankId:3,
    name: "Anjanath Mantle",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 2,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:3,
    RankId:3,
    name: "Conflagrant Sac",
    targetReward: 15,
    captureReward: 7,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:3,
    RankId:3,
    name: "Anjanath Hardfang",
    targetReward: 0,
    captureReward: 23,
    brokenPartReward: 60,
    carve: 21,
    droppedMaterial:10
  },
  {
    MonsterId:3,
    RankId:3,
    name: "Afflicted Scale",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:4,
    RankId:2,
    name: "Apex Beastclaw",
    targetReward: 7,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 8,
    droppedMaterial:0
  },
  {
    MonsterId:4,
    RankId:2,
    name: "Arzuros Carapace",
    targetReward: 36,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 28,
    droppedMaterial:60
  },
  {
    MonsterId:4,
    RankId:2,
    name: "Arzuros Pelt+",
    targetReward: 27,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 47,
    droppedMaterial:40
  },
  {
    MonsterId:4,
    RankId:2,
    name: "Arzuros Pelt+",
    targetReward: 27,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 47,
    droppedMaterial:40
  },
  {
    MonsterId:4,
    RankId:2,
    name: "Stoutbone",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 47,
    droppedMaterial:40
  },
  {
    MonsterId:4,
    RankId:2,
    name: "Beast Gem",
    targetReward: 6,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 4,
    droppedMaterial:0
  },
  {
    MonsterId:5,
    RankId:2,
    name: "Apex Curlhorn",
    targetReward: 5,
    captureReward: 0,
    brokenPartReward: 100,
    carve: 7,
    droppedMaterial:0
  },
  {
    MonsterId:5,
    RankId:2,
    name: "Diablos Carapace",
    targetReward: 32,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 29,
    droppedMaterial:20
  },
  {
    MonsterId:5,
    RankId:2,
    name: "Diablos Ridge+",
    targetReward: 25,
    captureReward: 0,
    brokenPartReward: 50,
    carve: 32,
    droppedMaterial:20
  },
  {
    MonsterId:5,
    RankId:2,
    name: "Diablos Fang",
    targetReward: 13,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 14,
    droppedMaterial:0
  },
  {
    MonsterId:5,
    RankId:2,
    name: "Diablos Tailcase",
    targetReward: 5,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:5,
    RankId:2,
    name: "Diablos Medulla",
    targetReward: 8,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:5,
    RankId:2,
    name: "Wyvern Gem",
    targetReward: 4,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 6,
    droppedMaterial:2
  },
  {
    MonsterId:5,
    RankId:2,
    name: "Diablos Marrow",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 30,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:6,
    RankId:2,
    name: "Apex Bubblefoam",
    targetReward: 6,
    captureReward: 0,
    brokenPartReward: 31,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:6,
    RankId:2,
    name: "Mizutsune Scale+",
    targetReward: 38,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 41,
    droppedMaterial:58
  },
  {
    MonsterId:6,
    RankId:2,
    name: "Mizutsune Purplefur+",
    targetReward: 29,
    captureReward: 0,
    brokenPartReward: 65,
    carve: 28,
    droppedMaterial:40
  },
  {
    MonsterId:6,
    RankId:2,
    name: "Mizutsune Claw+",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 15,
    droppedMaterial:0
  },
  {
    MonsterId:6,
    RankId:2,
    name: "Mizutsune Tail",
    targetReward: 5,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 75,
    droppedMaterial:0
  },
  {
    MonsterId:6,
    RankId:2,
    name: "Mizutsune Plate",
    targetReward: 5,
    captureReward: 0,
    brokenPartReward: 7,
    carve: 3,
    droppedMaterial:0
  },
  {
    MonsterId:6,
    RankId:2,
    name: "Mizutsune Water Orb",
    targetReward: 2,
    captureReward: 0,
    brokenPartReward: 5,
    carve: 1,
    droppedMaterial:2
  },
  {
    MonsterId:6,
    RankId:2,
    name: "Mizutsune Fin+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 60,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:7,
    RankId:2,
    name: "Apex Blaze Sac",
    targetReward: 8,
    captureReward: 0,
    brokenPartReward: 35,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:7,
    RankId:2,
    name: "Rathalos Scale+",
    targetReward: 35,
    captureReward: 0,
    brokenPartReward: 32,
    carve: 36,
    droppedMaterial:29
  },
  {
    MonsterId:7,
    RankId:2,
    name: "Rathalos Carapace",
    targetReward: 27,
    captureReward: 0,
    brokenPartReward: 32,
    carve: 36,
    droppedMaterial:39
  },
  {
    MonsterId:7,
    RankId:2,
    name: "Rathalos Wing",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 30,
    carve: 19,
    droppedMaterial:0
  },
  {
    MonsterId:7,
    RankId:2,
    name: "Rath Medulla",
    targetReward: 8,
    captureReward: 0,
    brokenPartReward: 30,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:7,
    RankId:2,
    name: "Rathalos Plate",
    targetReward: 5,
    captureReward: 0,
    brokenPartReward: 7,
    carve: 3,
    droppedMaterial:0
  },
  {
    MonsterId:7,
    RankId:2,
    name: "Rathalos Ruby",
    targetReward: 3,
    captureReward: 0,
    brokenPartReward: 5,
    carve: 1,
    droppedMaterial:2
  },
  {
    MonsterId:7,
    RankId:2,
    name: "Rath Wingtalon+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 0,
    droppedMaterial:19
  },
  {
    MonsterId:7,
    RankId:2,
    name: "Rathalos Tail",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 65,
    droppedMaterial:0
  },
  {
    MonsterId:8,
    RankId:2,
    name: "Apex Venom Spike",
    targetReward: 5,
    captureReward: 0,
    brokenPartReward: 25,
    carve: 6,
    droppedMaterial:0
  },
  {
    MonsterId:8,
    RankId:2,
    name: "Rathian Scale+",
    targetReward: 31,
    captureReward: 0,
    brokenPartReward: 58,
    carve: 41,
    droppedMaterial:58
  },
  {
    MonsterId:8,
    RankId:2,
    name: "Rathian Carapace",
    targetReward: 23,
    captureReward: 0,
    brokenPartReward: 30,
    carve: 32,
    droppedMaterial:40
  },
  {
    MonsterId:8,
    RankId:2,
    name: "Rathian Webbing",
    targetReward: 8,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:8,
    RankId:2,
    name: "Inferno Sac",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 17,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:8,
    RankId:2,
    name: "Monster Keenbone",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:8,
    RankId:2,
    name: "Rathian Plate",
    targetReward: 5,
    captureReward: 0,
    brokenPartReward: 7,
    carve: 3,
    droppedMaterial:0
  },
  {
    MonsterId:8,
    RankId:2,
    name: "Rathian Ruby",
    targetReward: 2,
    captureReward: 0,
    brokenPartReward: 5,
    carve: 1,
    droppedMaterial:2
  },
  {
    MonsterId:8,
    RankId:2,
    name: "Rath Wingtalon+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:8,
    RankId:2,
    name: "Rathalos Medulla",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 8,
    droppedMaterial:0
  },
  {
    MonsterId:9,
    RankId:2,
    name: "Apex Shockshell",
    targetReward: 5,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 9,
    droppedMaterial:0
  },
  {
    MonsterId:9,
    RankId:2,
    name: "Zinogre Carapace",
    targetReward: 39,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 36,
    droppedMaterial:43
  },
  {
    MonsterId:9,
    RankId:2,
    name: "Zinogre Electrofur",
    targetReward: 32,
    captureReward: 0,
    brokenPartReward: 30,
    carve: 29,
    droppedMaterial:38
  },
  {
    MonsterId:9,
    RankId:2,
    name: "Zinogre Tail",
    targetReward: 4,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:9,
    RankId:2,
    name: "Fulgurbug",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:15
  },
  {
    MonsterId:9,
    RankId:2,
    name: "Zinogre Plate",
    targetReward: 5,
    captureReward: 0,
    brokenPartReward: 7,
    carve: 7,
    droppedMaterial:0
  },
  {
    MonsterId:9,
    RankId:2,
    name: "Zinogre Jasper",
    targetReward: 3,
    captureReward: 0,
    brokenPartReward: 3,
    carve: 5,
    droppedMaterial:2
  },
  {
    MonsterId:9,
    RankId:2,
    name: "Zinogre Horn+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 90,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:9,
    RankId:2,
    name: "Zinogre Claw+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 22,
    droppedMaterial:12
  },
  {
    MonsterId:10,
    RankId:1,
    name: "Arzuros Shell",
    targetReward: 14,
    captureReward: 39,
    brokenPartReward: 0,
    carve: 30,
    droppedMaterial:40
  },
  {
    MonsterId:10,
    RankId:1,
    name: "Arzuros Pelt",
    targetReward: 38,
    captureReward: 17,
    brokenPartReward: 20,
    carve: 55,
    droppedMaterial:40
  },
  {
    MonsterId:10,
    RankId:1,
    name: "Arzuros Brace",
    targetReward: 18,
    captureReward: 24,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:10,
    RankId:1,
    name: "Jumbo Bone",
    targetReward: 16,
    captureReward: 20,
    brokenPartReward: 0,
    carve: 15,
    droppedMaterial:0
  },
  {
    MonsterId:10,
    RankId:2,
    name: "Arzuros Carapace",
    targetReward: 14,
    captureReward: 37,
    brokenPartReward: 0,
    carve: 30,
    droppedMaterial:40
  },
  {
    MonsterId:10,
    RankId:2,
    name: "Arzuros Pelt+",
    targetReward: 36,
    captureReward: 16,
    brokenPartReward: 20,
    carve: 52,
    droppedMaterial:39
  },
  {
    MonsterId:10,
    RankId:2,
    name: "Arzuros Brace+",
    targetReward: 21,
    captureReward: 22,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:10,
    RankId:2,
    name: "Stoutbone",
    targetReward: 14,
    captureReward: 18,
    brokenPartReward: 0,
    carve: 15,
    droppedMaterial:0
  },
  {
    MonsterId:10,
    RankId:2,
    name: "Beast Gem",
    targetReward: 5,
    captureReward: 7,
    brokenPartReward: 0,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:10,
    RankId:3,
    name: "Arzuros Cortex",
    targetReward: 14,
    captureReward: 36,
    brokenPartReward: 0,
    carve: 29,
    droppedMaterial:40
  },
  {
    MonsterId:10,
    RankId:3,
    name: "Arzuros Fur",
    targetReward: 36,
    captureReward: 15,
    brokenPartReward: 20,
    carve: 49,
    droppedMaterial:25
  },
  {
    MonsterId:10,
    RankId:3,
    name: "Arzuros Allbrace",
    targetReward: 22,
    captureReward: 22,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:10,
    RankId:3,
    name: "Massive Bone",
    targetReward: 15,
    captureReward: 18,
    brokenPartReward: 0,
    carve: 16,
    droppedMaterial:0
  },
  {
    MonsterId:10,
    RankId:3,
    name: "Large Beast Gem",
    targetReward: 3,
    captureReward: 3,
    brokenPartReward: 0,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:10,
    RankId:3,
    name: "Beast Gem",
    targetReward: 0,
    captureReward: 6,
    brokenPartReward: 0,
    carve: 4,
    droppedMaterial:4
  },
  {
    MonsterId:10,
    RankId:3,
    name: "Afflicted Bone",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:11,
    RankId:3,
    name: "Astalos Shard",
    targetReward: 21,
    captureReward: 0,
    brokenPartReward: 27,
    carve: 32,
    droppedMaterial:30
  },
  {
    MonsterId:11,
    RankId:3,
    name: "Heavy Astalos Shell",
    targetReward: 28,
    captureReward: 30,
    brokenPartReward: 70,
    carve: 25,
    droppedMaterial:19
  },
  {
    MonsterId:11,
    RankId:3,
    name: "Astalos Wingmembrane",
    targetReward: 19,
    captureReward: 27,
    brokenPartReward: 30,
    carve: 15,
    droppedMaterial:0
  },
  {
    MonsterId:11,
    RankId:3,
    name: "Boltscale",
    targetReward: 12,
    captureReward: 12,
    brokenPartReward: 17,
    carve: 18,
    droppedMaterial:0
  },
  {
    MonsterId:11,
    RankId:3,
    name: "Heavy Astalos Crest+",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 8,
    droppedMaterial:0
  },
  {
    MonsterId:11,
    RankId:3,
    name: "Astalos Scissortailblade",
    targetReward: 7,
    captureReward: 10,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:11,
    RankId:3,
    name: "Astalos Mantle",
    targetReward: 3,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:11,
    RankId:3,
    name: "Astalos Wingripper",
    targetReward: 0,
    captureReward: 18,
    brokenPartReward: 50,
    carve: 0,
    droppedMaterial:15
  },
  {
    MonsterId:12,
    RankId:3,
    name: "Auroracanth Icescale",
    targetReward: 21,
    captureReward: 17,
    brokenPartReward: 16,
    carve: 42,
    droppedMaterial:35
  },
  {
    MonsterId:12,
    RankId:3,
    name: "Auroracanth Icecortex",
    targetReward: 33,
    captureReward: 32,
    brokenPartReward: 0,
    carve: 32,
    droppedMaterial:0
  },
  {
    MonsterId:12,
    RankId:3,
    name: "Auroracanth Fin",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:12,
    RankId:3,
    name: "Monster Slogbone",
    targetReward: 10,
    captureReward: 9,
    brokenPartReward: 0,
    carve: 14,
    droppedMaterial:0
  },
  {
    MonsterId:12,
    RankId:3,
    name: "Cryo Sac",
    targetReward: 19,
    captureReward: 14,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:12,
    RankId:3,
    name: "Large Wyvern Gem",
    targetReward: 3,
    captureReward: 4,
    brokenPartReward: 4,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:12,
    RankId:3,
    name: "Auroracanth Iceclaw",
    targetReward: 0,
    captureReward: 24,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:14
  },
  {
    MonsterId:12,
    RankId:3,
    name: "Afflicted Claw",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:13,
    RankId:1,
    name: "Barioth Shell",
    targetReward: 21,
    captureReward: 0,
    brokenPartReward: 25,
    carve: 40,
    droppedMaterial:30
  },
  {
    MonsterId:13,
    RankId:1,
    name: "Barioth Pelt",
    targetReward: 33,
    captureReward: 31,
    brokenPartReward: 0,
    carve: 25,
    droppedMaterial:35
  },
  {
    MonsterId:13,
    RankId:1,
    name: "Barioth Claw",
    targetReward: 9,
    captureReward: 17,
    brokenPartReward: 75,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:13,
    RankId:1,
    name: "Barioth Spike",
    targetReward: 13,
    captureReward: 9,
    brokenPartReward: 25,
    carve: 20,
    droppedMaterial:10
  },
  {
    MonsterId:13,
    RankId:1,
    name: "Barioth Tail",
    targetReward: 8,
    captureReward: 16,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:13,
    RankId:1,
    name: "Frost Sac",
    targetReward: 16,
    captureReward: 14,
    brokenPartReward: 0,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:13,
    RankId:1,
    name: "Amber Fang",
    targetReward: 0,
    captureReward: 13,
    brokenPartReward: 75,
    carve: 15,
    droppedMaterial:0
  },
  {
    MonsterId:13,
    RankId:2,
    name: "",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:13,
    RankId:2,
    name: "Barioth Carapace",
    targetReward: 21,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 39,
    droppedMaterial:32
  },
  {
    MonsterId:13,
    RankId:2,
    name: "Barioth Pelt+",
    targetReward: 33,
    captureReward: 33,
    brokenPartReward: 0,
    carve: 25,
    droppedMaterial:35
  },
  {
    MonsterId:13,
    RankId:2,
    name: "Barioth Claw+",
    targetReward: 12,
    captureReward: 18,
    brokenPartReward: 70,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:13,
    RankId:2,
    name: "Barioth Spike",
    targetReward: 8,
    captureReward: 6,
    brokenPartReward: 30,
    carve: 15,
    droppedMaterial:7
  },
  {
    MonsterId:13,
    RankId:2,
    name: "Barrioth Tail",
    targetReward: 5,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 65,
    droppedMaterial:0
  },
  {
    MonsterId:13,
    RankId:2,
    name: "Freezer Sac",
    targetReward: 18,
    captureReward: 14,
    brokenPartReward: 0,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:13,
    RankId:2,
    name: "Amber Fang+",
    targetReward: 0,
    captureReward: 14,
    brokenPartReward: 75,
    carve: 15,
    droppedMaterial:0
  },
  {
    MonsterId:13,
    RankId:3,
    name: "Barioth Cortex",
    targetReward: 21,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 39,
    droppedMaterial:29
  },
  {
    MonsterId:13,
    RankId:3,
    name: "Barioth Thickfur",
    targetReward: 30,
    captureReward: 31,
    brokenPartReward: 0,
    carve: 25,
    droppedMaterial:35
  },
  {
    MonsterId:13,
    RankId:3,
    name: "Barioth Hardclaw",
    targetReward: 10,
    captureReward: 18,
    brokenPartReward: 75,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:13,
    RankId:3,
    name: "Barioth Greatspike",
    targetReward: 13,
    captureReward: 9,
    brokenPartReward: 25,
    carve: 20,
    droppedMaterial:10
  },
  {
    MonsterId:13,
    RankId:3,
    name: "Barioth Lash",
    targetReward: 5,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 75,
    droppedMaterial:0
  },
  {
    MonsterId:13,
    RankId:3,
    name: "Cryo Sac",
    targetReward: 18,
    captureReward: 14,
    brokenPartReward: 0,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:13,
    RankId:3,
    name: "Large Wyvern Gem",
    targetReward: 3,
    captureReward: 3,
    brokenPartReward: 5,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:13,
    RankId:3,
    name: "Amber Hardfang",
    targetReward: 0,
    captureReward: 13,
    brokenPartReward: 75,
    carve: 15,
    droppedMaterial:0
  },
  {
    MonsterId:13,
    RankId:3,
    name: "Afflicted Fang",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:14,
    RankId:1,
    name: "Barroth Shel",
    targetReward: 14,
    captureReward: 12,
    brokenPartReward: 100,
    carve: 42,
    droppedMaterial:50
  },
  {
    MonsterId:14,
    RankId:1,
    name: "Barroth Ridge",
    targetReward: 28,
    captureReward: 22,
    brokenPartReward: 0,
    carve: 30,
    droppedMaterial:15
  },
  {
    MonsterId:14,
    RankId:1,
    name: "Barroth Claw",
    targetReward: 30,
    captureReward: 20,
    brokenPartReward: 100,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:14,
    RankId:1,
    name: "Barroth Scalp",
    targetReward: 10,
    captureReward: 13,
    brokenPartReward: 8,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:14,
    RankId:1,
    name: "Barroth Tail",
    targetReward: 8,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:14,
    RankId:1,
    name: "Fertile Mud",
    targetReward: 10,
    captureReward: 11,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:35
  },
  {
    MonsterId:14,
    RankId:1,
    name: "Monster Bone M",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:14,
    RankId:2,
    name: "Barroth Carapace",
    targetReward: 15,
    captureReward: 13,
    brokenPartReward: 100,
    carve: 42,
    droppedMaterial:50
  },
  {
    MonsterId:14,
    RankId:2,
    name: "Barroth Ridge+",
    targetReward: 29,
    captureReward: 23,
    brokenPartReward: 0,
    carve: 31,
    droppedMaterial:14
  },
  {
    MonsterId:14,
    RankId:2,
    name: "Barroth Claw+",
    targetReward: 21,
    captureReward: 32,
    brokenPartReward: 100,
    carve: 21,
    droppedMaterial:0
  },
  {
    MonsterId:14,
    RankId:2,
    name: "Barroth Scalp",
    targetReward: 6,
    captureReward: 8,
    brokenPartReward: 0,
    carve: 6,
    droppedMaterial:0
  },
  {
    MonsterId:14,
    RankId:2,
    name: "Barroth Tail",
    targetReward: 6,
    captureReward: 8,
    brokenPartReward: 0,
    carve: 60,
    droppedMaterial:0
  },
  {
    MonsterId:14,
    RankId:2,
    name: "Rich Mud",
    targetReward: 11,
    captureReward: 11,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:35
  },
  {
    MonsterId:14,
    RankId:2,
    name: "Monster Keenbone",
    targetReward: 11,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:14,
    RankId:2,
    name: "Wyvern Gem",
    targetReward: 1,
    captureReward: 5,
    brokenPartReward: 0,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:14,
    RankId:3,
    name: "Barroth Cortex",
    targetReward: 15,
    captureReward: 13,
    brokenPartReward: 100,
    carve: 42,
    droppedMaterial:60
  },
  {
    MonsterId:14,
    RankId:3,
    name: "Barroth Chine",
    targetReward: 29,
    captureReward: 23,
    brokenPartReward: 0,
    carve: 31,
    droppedMaterial:14
  },
  {
    MonsterId:14,
    RankId:3,
    name: "Barroth Hardclaw",
    targetReward: 21,
    captureReward: 32,
    brokenPartReward: 100,
    carve: 21,
    droppedMaterial:0
  },
  {
    MonsterId:14,
    RankId:3,
    name: "Barroth Crown",
    targetReward: 6,
    captureReward: 8,
    brokenPartReward: 0,
    carve: 6,
    droppedMaterial:0
  },
  {
    MonsterId:14,
    RankId:3,
    name: "Barroth Lash",
    targetReward: 6,
    captureReward: 8,
    brokenPartReward: 0,
    carve: 60,
    droppedMaterial:0
  },
  {
    MonsterId:14,
    RankId:3,
    name: "Rich Mud",
    targetReward: 11,
    captureReward: 11,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:35
  },
  {
    MonsterId:14,
    RankId:3,
    name: "Monster Toughbone",
    targetReward: 11,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:14,
    RankId:3,
    name: "Large Wyvern Gem",
    targetReward: 1,
    captureReward: 5,
    brokenPartReward: 0,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:14,
    RankId:3,
    name: "Afflicted Monsterbone",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:15,
    RankId:1,
    name: "Basarios Shell",
    targetReward: 16,
    captureReward: 24,
    brokenPartReward: 80,
    carve: 40,
    droppedMaterial:15
  },
  {
    MonsterId:15,
    RankId:1,
    name: "Basarios Pleura",
    targetReward: 27,
    captureReward: 0,
    brokenPartReward: 55,
    carve: 27,
    droppedMaterial:20
  },
  {
    MonsterId:15,
    RankId:1,
    name: "Basarios Wing",
    targetReward: 20,
    captureReward: 34,
    brokenPartReward: 40,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:15,
    RankId:1,
    name: "Basarios Tail",
    targetReward: 7,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:15,
    RankId:1,
    name: "Poison Sac",
    targetReward: 12,
    captureReward: 16,
    brokenPartReward: 20,
    carve: 21,
    droppedMaterial:0
  },
  {
    MonsterId:15,
    RankId:1,
    name: "Flame Sac",
    targetReward: 8,
    captureReward: 14,
    brokenPartReward: 20,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:15,
    RankId:1,
    name: "Machalite Ore",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 35,
    carve: 12,
    droppedMaterial:35
  },
  {
    MonsterId:15,
    RankId:2,
    name: "Basarios Carapace",
    targetReward: 19,
    captureReward: 27,
    brokenPartReward: 70,
    carve: 37,
    droppedMaterial:15
  },
  {
    MonsterId:15,
    RankId:2,
    name: "Basarios Pleura+",
    targetReward: 28,
    captureReward: 0,
    brokenPartReward: 55,
    carve: 26,
    droppedMaterial:20
  },
  {
    MonsterId:15,
    RankId:2,
    name: "Basarios Tears",
    targetReward: 7,
    captureReward: 10,
    brokenPartReward: 10,
    carve: 7,
    droppedMaterial:3
  },
  {
    MonsterId:15,
    RankId:2,
    name: "Toxin Sac",
    targetReward: 17,
    captureReward: 18,
    brokenPartReward: 20,
    carve: 19,
    droppedMaterial:0
  },
  {
    MonsterId:15,
    RankId:2,
    name: "Inferno Sac",
    targetReward: 15,
    captureReward: 15,
    brokenPartReward: 20,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:15,
    RankId:2,
    name: "Carbalite Ore",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 40,
    carve: 10,
    droppedMaterial:31
  },
  {
    MonsterId:15,
    RankId:2,
    name: "Wyvern Gem",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 0,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:15,
    RankId:2,
    name: "Basarios Wing",
    targetReward: 0,
    captureReward: 18,
    brokenPartReward: 25,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:15,
    RankId:2,
    name: "Basarios Tail",
    targetReward: 0,
    captureReward: 9,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:15,
    RankId:3,
    name: "Basarios Cortex",
    targetReward: 15,
    captureReward: 24,
    brokenPartReward: 67,
    carve: 38,
    droppedMaterial:15
  },
  {
    MonsterId:15,
    RankId:3,
    name: "Basarios Pectus+",
    targetReward: 26,
    captureReward: 0,
    brokenPartReward: 55,
    carve: 28,
    droppedMaterial:20
  },
  {
    MonsterId:15,
    RankId:3,
    name: "Basarios Fellwing",
    targetReward: 20,
    captureReward: 32,
    brokenPartReward: 40,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:15,
    RankId:3,
    name: "Basarios Lash",
    targetReward: 7,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:15,
    RankId:3,
    name: "Deadly Poison Sac",
    targetReward: 12,
    captureReward: 16,
    brokenPartReward: 20,
    carve: 18,
    droppedMaterial:0
  },
  {
    MonsterId:15,
    RankId:3,
    name: "Conflagrant Sac",
    targetReward: 8,
    captureReward: 13,
    brokenPartReward: 20,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:15,
    RankId:3,
    name: "Eltalite Ore",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 35,
    carve: 12,
    droppedMaterial:31
  },
  {
    MonsterId:15,
    RankId:3,
    name: "Basarios Pallium",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 3,
    droppedMaterial:0
  },
  {
    MonsterId:15,
    RankId:3,
    name: "Basarios Tears",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 10,
    carve: 0,
    droppedMaterial:3
  },
  {
    MonsterId:15,
    RankId:3,
    name: "Large Wyvern Gem",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:15,
    RankId:3,
    name: "Afflicted Monster Bones",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:16,
    RankId:2,
    name: "Bazelgeuse Scale+",
    targetReward: 18,
    captureReward: 14,
    brokenPartReward: 27,
    carve: 39,
    droppedMaterial:39
  },
  {
    MonsterId:16,
    RankId:2,
    name: "Bazelgeuse Carapace",
    targetReward: 31,
    captureReward: 18,
    brokenPartReward: 69,
    carve: 26,
    droppedMaterial:35
  },
  {
    MonsterId:16,
    RankId:2,
    name: "Bazelgeuse Talon",
    targetReward: 23,
    captureReward: 24,
    brokenPartReward: 35,
    carve: 19,
    droppedMaterial:10
  },
  {
    MonsterId:16,
    RankId:2,
    name: "Bazelgeuse Fuse",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 15,
    droppedMaterial:0
  },
  {
    MonsterId:16,
    RankId:2,
    name: "Bazelgeuse Wing",
    targetReward: 12,
    captureReward: 29,
    brokenPartReward: 65,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:16,
    RankId:2,
    name: "Bazelgeuse Gem",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:16,
    RankId:2,
    name: "Bazelgeuse Tail",
    targetReward: 0,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:16,
    RankId:3,
    name: "Bazelgeuse Shard",
    targetReward: 17,
    captureReward: 13,
    brokenPartReward: 22,
    carve: 37,
    droppedMaterial:39
  },
  {
    MonsterId:16,
    RankId:3,
    name: "Bazelgeuse Cortex",
    targetReward: 29,
    captureReward: 17,
    brokenPartReward: 69,
    carve: 25,
    droppedMaterial:35
  },
  {
    MonsterId:16,
    RankId:3,
    name: "Bazelgeuse Hardclaw",
    targetReward: 22,
    captureReward: 23,
    brokenPartReward: 35,
    carve: 19,
    droppedMaterial:10
  },
  {
    MonsterId:16,
    RankId:3,
    name: "Bazelgeuse Glandflux",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 15,
    droppedMaterial:0
  },
  {
    MonsterId:16,
    RankId:3,
    name: "Bazelgeuse Fellwing",
    targetReward: 12,
    captureReward: 27,
    brokenPartReward: 65,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:16,
    RankId:3,
    name: "Bazelgeuse Gem",
    targetReward: 4,
    captureReward: 5,
    brokenPartReward: 5,
    carve: 3,
    droppedMaterial:0
  },
  {
    MonsterId:16,
    RankId:3,
    name: "Bazelgeuse Mantle",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:16,
    RankId:3,
    name: "Bazelgeuse Flail",
    targetReward: 0,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:17,
    RankId:1,
    name: "Bishaten Fur",
    targetReward: 22,
    captureReward: 23,
    brokenPartReward: 20,
    carve: 52,
    droppedMaterial:40
  },
  {
    MonsterId:17,
    RankId:1,
    name: "Bishaten Feather",
    targetReward: 33,
    captureReward: 36,
    brokenPartReward: 70,
    carve: 33,
    droppedMaterial:35
  },
  {
    MonsterId:17,
    RankId:1,
    name: "Bishaten Talon",
    targetReward: 22,
    captureReward: 18,
    brokenPartReward: 0,
    carve: 30,
    droppedMaterial:0
  },
  {
    MonsterId:17,
    RankId:1,
    name: "Bishaten Horn",
    targetReward: 9,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:17,
    RankId:1,
    name: "Jumbo Bone",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:17,
    RankId:1,
    name: "Bishaten Tailcase",
    targetReward: 0,
    captureReward: 23,
    brokenPartReward: 100,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:17,
    RankId:2,
    name: "Bishaten Fur+",
    targetReward: 20,
    captureReward: 20,
    brokenPartReward: 15,
    carve: 49,
    droppedMaterial:39
  },
  {
    MonsterId:17,
    RankId:2,
    name: "Bishaten Feather+",
    targetReward: 32,
    captureReward: 33,
    brokenPartReward: 70,
    carve: 32,
    droppedMaterial:35
  },
  {
    MonsterId:17,
    RankId:2,
    name: "Bishaten Talon+",
    targetReward: 21,
    captureReward: 16,
    brokenPartReward: 30,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:17,
    RankId:2,
    name: "Bishaten Horn+",
    targetReward: 9,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:17,
    RankId:2,
    name: "Stoutbone",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:17,
    RankId:2,
    name: "Beast Gem",
    targetReward: 6,
    captureReward: 8,
    brokenPartReward: 5,
    carve: 4,
    droppedMaterial:1
  },
  {
    MonsterId:17,
    RankId:2,
    name: "Bishaten Tailcase+",
    targetReward: 0,
    captureReward: 23,
    brokenPartReward: 100,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:17,
    RankId:3,
    name: "Bishaten Finefur",
    targetReward: 19,
    captureReward: 21,
    brokenPartReward: 15,
    carve: 49,
    droppedMaterial:39
  },
  {
    MonsterId:17,
    RankId:3,
    name: "Bishaten Glidefeather",
    targetReward: 28,
    captureReward: 34,
    brokenPartReward: 70,
    carve: 32,
    droppedMaterial:35
  },
  {
    MonsterId:17,
    RankId:3,
    name: "Bishaten Hardclaw",
    targetReward: 20,
    captureReward: 16,
    brokenPartReward: 30,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:17,
    RankId:3,
    name: "Bishaten Heavyhorn",
    targetReward: 9,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:17,
    RankId:3,
    name: "Massive Bone",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:17,
    RankId:3,
    name: "Beast Gem",
    targetReward: 7,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:17,
    RankId:3,
    name: "Large Beast Gem",
    targetReward: 5,
    captureReward: 6,
    brokenPartReward: 5,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:17,
    RankId:3,
    name: "Bishaten Hardtail",
    targetReward: 0,
    captureReward: 23,
    brokenPartReward: 100,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:17,
    RankId:3,
    name: "Afflicted Blood",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:18,
    RankId:3,
    name: "Orangaten Fur+",
    targetReward: 19,
    captureReward: 21,
    brokenPartReward: 15,
    carve: 49,
    droppedMaterial:39
  },
  {
    MonsterId:18,
    RankId:3,
    name: "Orangaten Feather+",
    targetReward: 28,
    captureReward: 34,
    brokenPartReward: 70,
    carve: 32,
    droppedMaterial:35
  },
  {
    MonsterId:18,
    RankId:3,
    name: "Orangaten Talon",
    targetReward: 20,
    captureReward: 16,
    brokenPartReward: 30,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:18,
    RankId:3,
    name: "Orangaten Horn+",
    targetReward: 9,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 6,
    droppedMaterial:0
  },
  {
    MonsterId:18,
    RankId:3,
    name: "Massive Bone",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:18,
    RankId:3,
    name: "Beast Gem",
    targetReward: 7,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:18,
    RankId:3,
    name: "Large Beast Gem",
    targetReward: 5,
    captureReward: 6,
    brokenPartReward: 5,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:18,
    RankId:3,
    name: "Orangaten Tailcase+",
    targetReward: 0,
    captureReward: 23,
    brokenPartReward: 100,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:18,
    RankId:3,
    name: "Solid Bone",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:18,
    RankId:3,
    name: "Afflicted Shell",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:19,
    RankId:2,
    name: "Chameleos Hide+",
    targetReward: 21,
    captureReward: 0,
    brokenPartReward: 17,
    carve: 36,
    droppedMaterial:30
  },
  {
    MonsterId:19,
    RankId:2,
    name: "Chameleos Claw+",
    targetReward: 28,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 29,
    droppedMaterial:30
  },
  {
    MonsterId:19,
    RankId:2,
    name: "Chameleos Wing",
    targetReward: 26,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:19,
    RankId:2,
    name: "Chameleos Tail",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:19,
    RankId:2,
    name: "Chameleos Gem",
    targetReward: 3,
    captureReward: 0,
    brokenPartReward: 3,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:19,
    RankId:2,
    name: "Fucium Ore",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:14
  },
  {
    MonsterId:19,
    RankId:2,
    name: "Chameleos Spike",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 21,
    droppedMaterial:0
  },
  {
    MonsterId:19,
    RankId:2,
    name: "Elder Dragon Blood",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:15
  },
  {
    MonsterId:19,
    RankId:3,
    name: "Chamelos Finehide",
    targetReward: 22,
    captureReward: 0,
    brokenPartReward: 12,
    carve: 36,
    droppedMaterial:30
  },
  {
    MonsterId:19,
    RankId:3,
    name: "Chameleos Hardclaw",
    targetReward: 31,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 28,
    droppedMaterial:30
  },
  {
    MonsterId:19,
    RankId:3,
    name: "Chameleos Fellwing",
    targetReward: 27,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:19,
    RankId:3,
    name: "Chameleos Lash",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:19,
    RankId:3,
    name: "Chameleos Gem",
    targetReward: 5,
    captureReward: 0,
    brokenPartReward: 5,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:19,
    RankId:3,
    name: "Large Elder Dragon Gem",
    targetReward: 3,
    captureReward: 0,
    brokenPartReward: 3,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:19,
    RankId:3,
    name: "Chameleos Hardhorn",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 24,
    droppedMaterial:0
  },
  {
    MonsterId:19,
    RankId:3,
    name: "Pure Dragon Blood",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:15
  },
  {
    MonsterId:19,
    RankId:3,
    name: "Ultimas Crystal",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:14
  },
  {
    MonsterId:20,
    RankId:2,
    name: "Gleaming Shell",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 28,
    droppedMaterial:25
  },
  {
    MonsterId:20,
    RankId:2,
    name: "Shimmering Scale",
    targetReward: 26,
    captureReward: 0,
    brokenPartReward: 77,
    carve: 36,
    droppedMaterial:25
  },
  {
    MonsterId:20,
    RankId:2,
    name: "Valstrax Claw+",
    targetReward: 20,
    captureReward: 0,
    brokenPartReward: 10,
    carve: 14,
    droppedMaterial:0
  },
  {
    MonsterId:20,
    RankId:2,
    name: "Valstrax Spineshell",
    targetReward: 13,
    captureReward: 0,
    brokenPartReward: 90,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:20,
    RankId:2,
    name: "Valstrax Tail",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:20,
    RankId:2,
    name: "Crimson Liquid",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 0,
    droppedMaterial:34
  },
  {
    MonsterId:20,
    RankId:2,
    name: "Red Dragon Orb",
    targetReward: 2,
    captureReward: 0,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:20,
    RankId:2,
    name: "Rouge Spikewing",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 90,
    carve: 21,
    droppedMaterial:0
  },
  {
    MonsterId:20,
    RankId:3,
    name: "Glittering Shell",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 28,
    droppedMaterial:24
  },
  {
    MonsterId:20,
    RankId:3,
    name: "Shimmering Shard",
    targetReward: 24,
    captureReward: 0,
    brokenPartReward: 77,
    carve: 36,
    droppedMaterial:25
  },
  {
    MonsterId:20,
    RankId:3,
    name: "Valstrax Talon",
    targetReward: 19,
    captureReward: 0,
    brokenPartReward: 10,
    carve: 14,
    droppedMaterial:0
  },
  {
    MonsterId:20,
    RankId:3,
    name: "Valstrax Spineshell+",
    targetReward: 13,
    captureReward: 0,
    brokenPartReward: 90,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:20,
    RankId:3,
    name: "Valstrax Helixtail",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:20,
    RankId:3,
    name: "Seething Crimson Liquid",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 32,
    droppedMaterial:0
  },
  {
    MonsterId:20,
    RankId:3,
    name: "Red Dragon Orb",
    targetReward: 4,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:3
  },
  {
    MonsterId:20,
    RankId:3,
    name: "Red Dragonsphire",
    targetReward: 2,
    captureReward: 0,
    brokenPartReward: 3,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:20,
    RankId:3,
    name: "Rouge Lancewing+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 90,
    carve: 21,
    droppedMaterial:0
  },
  {
    MonsterId:21,
    RankId:3,
    name: "Hermitaur Cortex",
    targetReward: 32,
    captureReward: 45,
    brokenPartReward: 0,
    carve: 45,
    droppedMaterial:80
  },
  {
    MonsterId:21,
    RankId:3,
    name: "Hermitaur Hardclaw",
    targetReward: 43,
    captureReward: 22,
    brokenPartReward: 70,
    carve: 33,
    droppedMaterial:0
  },
  {
    MonsterId:21,
    RankId:3,
    name: "Monster Hardbone",
    targetReward: 15,
    captureReward: 8,
    brokenPartReward: 10,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:21,
    RankId:3,
    name: "Fine Black Pearl",
    targetReward: 10,
    captureReward: 15,
    brokenPartReward: 0,
    carve: 10,
    droppedMaterial:20
  },
  {
    MonsterId:21,
    RankId:3,
    name: "Timeworn Crimson Horn",
    targetReward: 0,
    captureReward: 10,
    brokenPartReward: 90,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:21,
    RankId:3,
    name: "Crab Pearl+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:80
  },
  {
    MonsterId:21,
    RankId:3,
    name: "Afflicted Blood",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:22,
    RankId:1,
    name: "Diablos Shell",
    targetReward: 16,
    captureReward: 28,
    brokenPartReward: 0,
    carve: 40,
    droppedMaterial:15
  },
  {
    MonsterId:22,
    RankId:1,
    name: "Diablos Ridge",
    targetReward: 33,
    captureReward: 25,
    brokenPartReward: 80,
    carve: 32,
    droppedMaterial:35
  },
  {
    MonsterId:22,
    RankId:1,
    name: "Diablos Fang",
    targetReward: 25,
    captureReward: 21,
    brokenPartReward: 0,
    carve: 23,
    droppedMaterial:0
  },
  {
    MonsterId:22,
    RankId:1,
    name: "Diablos Tailcase",
    targetReward: 7,
    captureReward: 16,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:22,
    RankId:1,
    name: "Dash Extract",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:35
  },
  {
    MonsterId:22,
    RankId:1,
    name: "Diablos Marrow",
    targetReward: 7,
    captureReward: 10,
    brokenPartReward: 20,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:22,
    RankId:1,
    name: "Twisted Horn",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 100,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:22,
    RankId:2,
    name: "Diablos Carapace",
    targetReward: 18,
    captureReward: 29,
    brokenPartReward: 0,
    carve: 40,
    droppedMaterial:24
  },
  {
    MonsterId:22,
    RankId:2,
    name: "Diablos Ridge+",
    targetReward: 35,
    captureReward: 23,
    brokenPartReward: 50,
    carve: 33,
    droppedMaterial:35
  },
  {
    MonsterId:22,
    RankId:2,
    name: "Diablos Fang",
    targetReward: 13,
    captureReward: 11,
    brokenPartReward: 0,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:22,
    RankId:2,
    name: "Diablos Tailcase",
    targetReward: 5,
    captureReward: 9,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:22,
    RankId:2,
    name: "Dash Extract",
    targetReward: 9,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:25
  },
  {
    MonsterId:22,
    RankId:2,
    name: "Diablos Marrow",
    targetReward: 10,
    captureReward: 13,
    brokenPartReward: 30,
    carve: 7,
    droppedMaterial:0
  },
  {
    MonsterId:22,
    RankId:2,
    name: "Diablos Medulla",
    targetReward: 7,
    captureReward: 10,
    brokenPartReward: 20,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:22,
    RankId:2,
    name: "Wyvern Gem",
    targetReward: 3,
    captureReward: 5,
    brokenPartReward: 0,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:22,
    RankId:2,
    name: "Majestic Horn",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 100,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:22,
    RankId:3,
    name: "Diablos Cortex",
    targetReward: 24,
    captureReward: 40,
    brokenPartReward: 0,
    carve: 39,
    droppedMaterial:24
  },
  {
    MonsterId:22,
    RankId:3,
    name: "Diablos Chine",
    targetReward: 42,
    captureReward: 33,
    brokenPartReward: 80,
    carve: 48,
    droppedMaterial:35
  },
  {
    MonsterId:22,
    RankId:3,
    name: "Diablos Tailcase+",
    targetReward: 10,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:22,
    RankId:3,
    name: "Dash Extract",
    targetReward: 9,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:25
  },
  {
    MonsterId:22,
    RankId:3,
    name: "Diablos Medulla",
    targetReward: 12,
    captureReward: 10,
    brokenPartReward: 20,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:22,
    RankId:3,
    name: "Large Wyvern Gem",
    targetReward: 3,
    captureReward: 5,
    brokenPartReward: 0,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:22,
    RankId:3,
    name: "Twisted Stouthorn",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 100,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:23,
    RankId:3,
    name: "Espinas Shard",
    targetReward: 21,
    captureReward: 27,
    brokenPartReward: 40,
    carve: 41,
    droppedMaterial:28
  },
  {
    MonsterId:23,
    RankId:3,
    name: "Espinas Cortex",
    targetReward: 35,
    captureReward: 37,
    brokenPartReward: 12,
    carve: 31,
    droppedMaterial:28
  },
  {
    MonsterId:23,
    RankId:3,
    name: "Espinas Toxic Blood",
    targetReward: 26,
    captureReward: 0,
    brokenPartReward: 30,
    carve: 21,
    droppedMaterial:15
  },
  {
    MonsterId:23,
    RankId:3,
    name: "Espinas Lash",
    targetReward: 8,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:23,
    RankId:3,
    name: "Espinas Surspike",
    targetReward: 7,
    captureReward: 0,
    brokenPartReward: 60,
    carve: 5,
    droppedMaterial:3
  },
  {
    MonsterId:23,
    RankId:3,
    name: "Espinas Mantle",
    targetReward: 3,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:23,
    RankId:3,
    name: "Espinas Hardhorn",
    targetReward: 0,
    captureReward: 21,
    brokenPartReward: 85,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:24,
    RankId:3,
    name: "Rajang Apoplexy",
    targetReward: 20,
    captureReward: 33,
    brokenPartReward: 20,
    carve: 37,
    droppedMaterial:35
  },
  {
    MonsterId:24,
    RankId:3,
    name: "Rajang Hardclaw",
    targetReward: 26,
    captureReward: 27,
    brokenPartReward: 100,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:24,
    RankId:3,
    name: "Rajang Hardfang",
    targetReward: 35,
    captureReward: 18,
    brokenPartReward: 0,
    carve: 28,
    droppedMaterial:55
  },
  {
    MonsterId:24,
    RankId:3,
    name: "Gold Rajang Pelt+",
    targetReward: 14,
    captureReward: 16,
    brokenPartReward: 0,
    carve: 12,
    droppedMaterial:15
  },
  {
    MonsterId:24,
    RankId:3,
    name: "Rajang Heart",
    targetReward: 5,
    captureReward: 6,
    brokenPartReward: 0,
    carve: 3,
    droppedMaterial:0
  },
  {
    MonsterId:24,
    RankId:3,
    name: "Ghoulish Gold Gorer",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:25,
    RankId:3,
    name: "Abyssal Dragonscale",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 37,
    droppedMaterial:34
  },
  {
    MonsterId:25,
    RankId:3,
    name: "Archdemon Backshell",
    targetReward: 28,
    captureReward: 0,
    brokenPartReward: 97,
    carve: 29,
    droppedMaterial:0
  },
  {
    MonsterId:25,
    RankId:3,
    name: "Archdemon Piercetalon",
    targetReward: 20,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 21,
    droppedMaterial:0
  },
  {
    MonsterId:25,
    RankId:3,
    name: "Archdemon Wingtalon",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:25,
    RankId:3,
    name: "Consumption Parasite",
    targetReward: 16,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 0,
    droppedMaterial:25
  },
  {
    MonsterId:25,
    RankId:3,
    name: "Archdemon Taailhook",
    targetReward: 7,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:25,
    RankId:3,
    name: "Abyssal Dragonsphire",
    targetReward: 2,
    captureReward: 0,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:25,
    RankId:3,
    name: "Archdemon Doomhorn",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 100,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:26,
    RankId:3,
    name: "Garangolm Cortex",
    targetReward: 19,
    captureReward: 27,
    brokenPartReward: 15,
    carve: 37,
    droppedMaterial:17
  },
  {
    MonsterId:26,
    RankId:3,
    name: "Garangolm Shard",
    targetReward: 34,
    captureReward: 38,
    brokenPartReward: 25,
    carve: 26,
    droppedMaterial:0
  },
  {
    MonsterId:26,
    RankId:3,
    name: "Golm Thick Juice",
    targetReward: 21,
    captureReward: 0,
    brokenPartReward: 10,
    carve: 20,
    droppedMaterial:30
  },
  {
    MonsterId:26,
    RankId:3,
    name: "Garangolm Hardfang",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 60,
    carve: 20,
    droppedMaterial:35
  },
  {
    MonsterId:26,
    RankId:3,
    name: "Golm Ploughtail",
    targetReward: 7,
    captureReward: 9,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:26,
    RankId:3,
    name: "Large Beast Gem",
    targetReward: 5,
    captureReward: 5,
    brokenPartReward: 5,
    carve: 3,
    droppedMaterial:3
  },
  {
    MonsterId:26,
    RankId:3,
    name: "Garangolm Fist",
    targetReward: 0,
    captureReward: 21,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:26,
    RankId:3,
    name: "Afflicted Fang",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:27,
    RankId:3,
    name: "Gore Magala Cortex",
    targetReward: 19,
    captureReward: 40,
    brokenPartReward: 32,
    carve: 26,
    droppedMaterial:15
  },
  {
    MonsterId:27,
    RankId:3,
    name: "Gore Magala Shard",
    targetReward: 33,
    captureReward: 0,
    brokenPartReward: 65,
    carve: 38,
    droppedMaterial:34
  },
  {
    MonsterId:27,
    RankId:3,
    name: "Gore Magala Shredder",
    targetReward: 33,
    captureReward: 0,
    brokenPartReward: 65,
    carve: 38,
    droppedMaterial:34
  },
  {
    MonsterId:27,
    RankId:3,
    name: "Gore Magala Eclipse",
    targetReward: 12,
    captureReward: 26,
    brokenPartReward: 75,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:27,
    RankId:3,
    name: "Gore Magala Tail",
    targetReward: 7,
    captureReward: 9,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:27,
    RankId:3,
    name: "Gore Magala Mantle",
    targetReward: 3,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:27,
    RankId:3,
    name: "Gore Magala Sensor",
    targetReward: 0,
    captureReward: 22,
    brokenPartReward: 100,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:28,
    RankId:1,
    name: "Goss Harag Fur",
    targetReward: 19,
    captureReward: 14,
    brokenPartReward: 80,
    carve: 32,
    droppedMaterial:40
  },
  {
    MonsterId:28,
    RankId:1,
    name: "Goss Harag Hide",
    targetReward: 29,
    captureReward: 29,
    brokenPartReward: 20,
    carve: 19,
    droppedMaterial:25
  },
  {
    MonsterId:28,
    RankId:1,
    name: "Goss Harag Brace",
    targetReward: 20,
    captureReward: 25,
    brokenPartReward: 20,
    carve: 16,
    droppedMaterial:0
  },
  {
    MonsterId:28,
    RankId:1,
    name: "Block of Ice",
    targetReward: 14,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:35
  },
  {
    MonsterId:28,
    RankId:1,
    name: "Frost Sac",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:28,
    RankId:1,
    name: "Massive Bone",
    targetReward: 8,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:28,
    RankId:1,
    name: "Goss Harag Claw",
    targetReward: 0,
    captureReward: 20,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:15
  },
  {
    MonsterId:28,
    RankId:1,
    name: "Goss Harag Horn",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 21,
    droppedMaterial:0
  },
  {
    MonsterId:28,
    RankId:2,
    name: "Goss Harag Fur+",
    targetReward: 18,
    captureReward: 12,
    brokenPartReward: 80,
    carve: 29,
    droppedMaterial:40
  },
  {
    MonsterId:28,
    RankId:2,
    name: "Goss Harag Hide+",
    targetReward: 27,
    captureReward: 25,
    brokenPartReward: 10,
    carve: 18,
    droppedMaterial:25
  },
  {
    MonsterId:28,
    RankId:2,
    name: "Goss Harag Brace+",
    targetReward: 20,
    captureReward: 20,
    brokenPartReward: 20,
    carve: 15,
    droppedMaterial:0
  },
  {
    MonsterId:28,
    RankId:2,
    name: "Block of Ice+",
    targetReward: 14,
    captureReward: 10,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:33
  },
  {
    MonsterId:28,
    RankId:2,
    name: "Freezer Sac",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 9,
    droppedMaterial:0
  },
  {
    MonsterId:28,
    RankId:2,
    name: "Beast Gem",
    targetReward: 8,
    captureReward: 10,
    brokenPartReward: 10,
    carve: 6,
    droppedMaterial:2
  },
  {
    MonsterId:28,
    RankId:2,
    name: "Goss Harag Bile",
    targetReward: 3,
    captureReward: 5,
    brokenPartReward: 8,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:28,
    RankId:2,
    name: "Goss Harag Claw+",
    targetReward: 0,
    captureReward: 18,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:14
  },
  {
    MonsterId:28,
    RankId:2,
    name: "Goss Harag Horn+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 21,
    droppedMaterial:0
  },
  {
    MonsterId:28,
    RankId:3,
    name: "Goss Harag Frozen Fur",
    targetReward: 18,
    captureReward: 14,
    brokenPartReward: 80,
    carve: 29,
    droppedMaterial:40
  },
  {
    MonsterId:28,
    RankId:3,
    name: "Goss Finefur",
    targetReward: 27,
    captureReward: 27,
    brokenPartReward: 15,
    carve: 18,
    droppedMaterial:25
  },
  {
    MonsterId:28,
    RankId:3,
    name: "Goss Harag Allbrace",
    targetReward: 20,
    captureReward: 22,
    brokenPartReward: 20,
    carve: 15,
    droppedMaterial:0
  },
  {
    MonsterId:28,
    RankId:3,
    name: "Dense Block of Ice",
    targetReward: 15,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:33
  },
  {
    MonsterId:28,
    RankId:3,
    name: "Cryo Sac",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 9,
    droppedMaterial:0
  },
  {
    MonsterId:28,
    RankId:3,
    name: "Large Beast Gem",
    targetReward: 5,
    captureReward: 0,
    brokenPartReward: 5,
    carve: 6,
    droppedMaterial:2
  },
  {
    MonsterId:28,
    RankId:3,
    name: "Goss Harag Bile+",
    targetReward: 3,
    captureReward: 5,
    brokenPartReward: 8,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:28,
    RankId:3,
    name: "Goss Harag Hardclaw",
    targetReward: 0,
    captureReward: 20,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:14
  },
  {
    MonsterId:28,
    RankId:3,
    name: "Goss Harag Hardhorn",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 21,
    droppedMaterial:0
  },
  {
    MonsterId:28,
    RankId:3,
    name: "Afflicted Claw",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:29,
    RankId:1,
    name: "Great Baggi Hide",
    targetReward: 21,
    captureReward: 21,
    brokenPartReward: 0,
    carve: 40,
    droppedMaterial:40
  },
  {
    MonsterId:29,
    RankId:1,
    name: "Great Baggi Claw",
    targetReward: 36,
    captureReward: 46,
    brokenPartReward: 0,
    carve: 33,
    droppedMaterial:10
  },
  {
    MonsterId:29,
    RankId:1,
    name: "Kings Crest",
    targetReward: 5,
    captureReward: 15,
    brokenPartReward: 70,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:29,
    RankId:1,
    name: "Sleep Sac",
    targetReward: 24,
    captureReward: 0,
    brokenPartReward: 30,
    carve: 27,
    droppedMaterial:0
  },
  {
    MonsterId:29,
    RankId:1,
    name: "Monsterbone M",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 18,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:29,
    RankId:2,
    name: "Great Baggi Hide+",
    targetReward: 22,
    captureReward: 23,
    brokenPartReward: 0,
    carve: 38,
    droppedMaterial:39
  },
  {
    MonsterId:29,
    RankId:2,
    name: "Great Baggi Claw+",
    targetReward: 37,
    captureReward: 47,
    brokenPartReward: 0,
    carve: 32,
    droppedMaterial:10
  },
  {
    MonsterId:29,
    RankId:2,
    name: "Coma Sac",
    targetReward: 25,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 27,
    droppedMaterial:0
  },
  {
    MonsterId:29,
    RankId:2,
    name: "Bird Wyvern Gem",
    targetReward: 3,
    captureReward: 5,
    brokenPartReward: 10,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:29,
    RankId:2,
    name: "Monster Bone+",
    targetReward: 13,
    captureReward: 13,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:29,
    RankId:2,
    name: "Kings Crest",
    targetReward: 0,
    captureReward: 12,
    brokenPartReward: 70,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:29,
    RankId:3,
    name: "Great Baggi Thickhide",
    targetReward: 36,
    captureReward: 41,
    brokenPartReward: 0,
    carve: 44,
    droppedMaterial:37
  },
  {
    MonsterId:29,
    RankId:3,
    name: "Great Baggi Claw+",
    targetReward: 20,
    captureReward: 22,
    brokenPartReward: 0,
    carve: 18,
    droppedMaterial:8
  },
  {
    MonsterId:29,
    RankId:3,
    name: "Torpor Sac",
    targetReward: 30,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 32,
    droppedMaterial:0
  },
  {
    MonsterId:29,
    RankId:3,
    name: "Monster Hardbone",
    targetReward: 11,
    captureReward: 13,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:29,
    RankId:3,
    name: "Fey Wyvern Gem",
    targetReward: 3,
    captureReward: 3,
    brokenPartReward: 5,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:29,
    RankId:3,
    name: "Glorious Crest",
    targetReward: 0,
    captureReward: 15,
    brokenPartReward: 75,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:29,
    RankId:3,
    name: "Bird WWyvern Gem",
    targetReward: 0,
    captureReward: 6,
    brokenPartReward: 0,
    carve: 4,
    droppedMaterial:4
  },
  {
    MonsterId:29,
    RankId:3,
    name: "Afflicted Pelt",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:30,
    RankId:1,
    name: "Great Izuchi Hide",
    targetReward: 21,
    captureReward: 26,
    brokenPartReward: 20,
    carve: 43,
    droppedMaterial:30
  },
  {
    MonsterId:30,
    RankId:1,
    name: "Great Izuchi Pelt",
    targetReward: 36,
    captureReward: 39,
    brokenPartReward: 30,
    carve: 33,
    droppedMaterial:20
  },
  {
    MonsterId:30,
    RankId:1,
    name: "Great Izuchi Tail",
    targetReward: 5,
    captureReward: 15,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:30,
    RankId:1,
    name: "Screamer Sac",
    targetReward: 26,
    captureReward: 20,
    brokenPartReward: 70,
    carve: 24,
    droppedMaterial:0
  },
  {
    MonsterId:30,
    RankId:1,
    name: "Monster Bone S",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:30,
    RankId:2,
    name: "Great Izuchi Hide+",
    targetReward: 23,
    captureReward: 27,
    brokenPartReward: 20,
    carve: 44,
    droppedMaterial:29
  },
  {
    MonsterId:30,
    RankId:2,
    name: "Great Izuchi Pelt+",
    targetReward: 39,
    captureReward: 39,
    brokenPartReward: 32,
    carve: 35,
    droppedMaterial:20
  },
  {
    MonsterId:30,
    RankId:2,
    name: "Great Izuchi Tail+",
    targetReward: 5,
    captureReward: 15,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:30,
    RankId:2,
    name: "Screamer sac",
    targetReward: 18,
    captureReward: 16,
    brokenPartReward: 65,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:30,
    RankId:2,
    name: "Monster Bone+",
    targetReward: 13,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:30,
    RankId:2,
    name: "Bird Wyvern Gem",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:30,
    RankId:3,
    name: "Great Izuchi Thickhide",
    targetReward: 27,
    captureReward: 25,
    brokenPartReward: 20,
    carve: 43,
    droppedMaterial:27
  },
  {
    MonsterId:30,
    RankId:3,
    name: "Great Izuchi Thickfur",
    targetReward: 42,
    captureReward: 35,
    brokenPartReward: 32,
    carve: 33,
    droppedMaterial:18
  },
  {
    MonsterId:30,
    RankId:3,
    name: "Great Izuchi Grindtail",
    targetReward: 5,
    captureReward: 15,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:30,
    RankId:3,
    name: "Screamer Sac",
    targetReward: 10,
    captureReward: 16,
    brokenPartReward: 65,
    carve: 18,
    droppedMaterial:0
  },
  {
    MonsterId:30,
    RankId:3,
    name: "Monster Hardbone",
    targetReward: 13,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:30,
    RankId:3,
    name: "Fey Wyvern Gem",
    targetReward: 3,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:30,
    RankId:3,
    name: "Bird Wyvern Gem",
    targetReward: 0,
    captureReward: 6,
    brokenPartReward: 0,
    carve: 4,
    droppedMaterial:4
  },
  {
    MonsterId:30,
    RankId:3,
    name: "Afflicted Pelt",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:31,
    RankId:1,
    name: "Great Wroggi Hide",
    targetReward: 22,
    captureReward: 21,
    brokenPartReward: 0,
    carve: 42,
    droppedMaterial:35
  },
  {
    MonsterId:31,
    RankId:1,
    name: "Great Wroggi Brace",
    targetReward: 34,
    captureReward: 46,
    brokenPartReward: 0,
    carve: 31,
    droppedMaterial:15
  },
  {
    MonsterId:31,
    RankId:1,
    name: "Kings Beak",
    targetReward: 5,
    captureReward: 15,
    brokenPartReward: 70,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:31,
    RankId:1,
    name: "Poison Sac",
    targetReward: 26,
    captureReward: 0,
    brokenPartReward: 30,
    carve: 27,
    droppedMaterial:0
  },
  {
    MonsterId:31,
    RankId:1,
    name: "Monster Bone M",
    targetReward: 13,
    captureReward: 18,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:31,
    RankId:2,
    name: "Great Wroggi Hide+",
    targetReward: 22,
    captureReward: 24,
    brokenPartReward: 0,
    carve: 41,
    droppedMaterial:34
  },
  {
    MonsterId:31,
    RankId:2,
    name: "Great Wroggi Brace+",
    targetReward: 36,
    captureReward: 46,
    brokenPartReward: 0,
    carve: 32,
    droppedMaterial:15
  },
  {
    MonsterId:31,
    RankId:2,
    name: "Toxin Sac",
    targetReward: 27,
    captureReward: 0,
    brokenPartReward: 18,
    carve: 24,
    droppedMaterial:0
  },
  {
    MonsterId:31,
    RankId:2,
    name: "Monster Bone+",
    targetReward: 12,
    captureReward: 13,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:31,
    RankId:2,
    name: "Bird Wyvern Gem",
    targetReward: 3,
    captureReward: 5,
    brokenPartReward: 12,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:31,
    RankId:2,
    name: "Kings Beak",
    targetReward: 0,
    captureReward: 12,
    brokenPartReward: 70,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:31,
    RankId:3,
    name: "Great Wroggi Thickhide",
    targetReward: 34,
    captureReward: 37,
    brokenPartReward: 0,
    carve: 43,
    droppedMaterial:34
  },
  {
    MonsterId:31,
    RankId:3,
    name: "Great Wroggi Brace+",
    targetReward: 21,
    captureReward: 22,
    brokenPartReward: 0,
    carve: 20,
    droppedMaterial:15
  },
  {
    MonsterId:31,
    RankId:3,
    name: "Deadly Poison Sac",
    targetReward: 30,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 31,
    droppedMaterial:0
  },
  {
    MonsterId:31,
    RankId:3,
    name: "Monster Hardbone",
    targetReward: 12,
    captureReward: 18,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:31,
    RankId:3,
    name: "Fey Wyvern Gem",
    targetReward: 3,
    captureReward: 3,
    brokenPartReward: 5,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:31,
    RankId:3,
    name: "Imperial Beak",
    targetReward: 0,
    captureReward: 20,
    brokenPartReward: 75,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:31,
    RankId:3,
    name: "Bird Wyvern Gem",
    targetReward: 0,
    captureReward: 6,
    brokenPartReward: 0,
    carve: 4,
    droppedMaterial:0
  },
  {
    MonsterId:31,
    RankId:3,
    name: "Afflicted Pelt",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:32,
    RankId:2,
    name: "Jyuratodus Carapace",
    targetReward: 12,
    captureReward: 33,
    brokenPartReward: 100,
    carve: 27,
    droppedMaterial:30
  },
  {
    MonsterId:32,
    RankId:2,
    name: "Jyuratodus Scale+",
    targetReward: 34,
    captureReward: 19,
    brokenPartReward: 100,
    carve: 37,
    droppedMaterial:37
  },
  {
    MonsterId:32,
    RankId:2,
    name: "Jyuratodus Fang+",
    targetReward: 14,
    captureReward: 25,
    brokenPartReward: 100,
    carve: 15,
    droppedMaterial:12
  },
  {
    MonsterId:32,
    RankId:2,
    name: "Jyuratodus Fin+",
    targetReward: 9,
    captureReward: 19,
    brokenPartReward: 100,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:32,
    RankId:2,
    name: "Monster Keenbone",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:32,
    RankId:2,
    name: "Torrent Sac",
    targetReward: 16,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:32,
    RankId:2,
    name: "Wyvern Gem",
    targetReward: 3,
    captureReward: 4,
    brokenPartReward: 0,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:32,
    RankId:3,
    name: "Jyuratodus Cortex",
    targetReward: 12,
    captureReward: 33,
    brokenPartReward: 100,
    carve: 27,
    droppedMaterial:30
  },
  {
    MonsterId:32,
    RankId:3,
    name: "Jyuratodus Shard",
    targetReward: 34,
    captureReward: 19,
    brokenPartReward: 100,
    carve: 15,
    droppedMaterial:12
  },
  {
    MonsterId:32,
    RankId:3,
    name: "Jyuratodus Hardfang",
    targetReward: 14,
    captureReward: 25,
    brokenPartReward: 100,
    carve: 15,
    droppedMaterial:12
  },
  {
    MonsterId:32,
    RankId:3,
    name: "Jyuratodus Grandfin",
    targetReward: 9,
    captureReward: 19,
    brokenPartReward: 100,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:32,
    RankId:3,
    name: "Monster Keenbone",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:32,
    RankId:3,
    name: "Flood Sac",
    targetReward: 16,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:32,
    RankId:3,
    name: "Large Wyvern Gem",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 0,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:32,
    RankId:3,
    name: "Afflicted Shel",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:33,
    RankId:1,
    name: "Flabby Hide",
    targetReward: 15,
    captureReward: 16,
    brokenPartReward: 100,
    carve: 36,
    droppedMaterial:40
  },
  {
    MonsterId:33,
    RankId:1,
    name: "Suspicious Fang",
    targetReward: 29,
    captureReward: 33,
    brokenPartReward: 60,
    carve: 21,
    droppedMaterial:20
  },
  {
    MonsterId:33,
    RankId:1,
    name: "Pale Extract",
    targetReward: 20,
    captureReward: 23,
    brokenPartReward: 28,
    carve: 28,
    droppedMaterial:30
  },
  {
    MonsterId:33,
    RankId:1,
    name: "Pale Bone",
    targetReward: 8,
    captureReward: 10,
    brokenPartReward: 12,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:33,
    RankId:1,
    name: "Electro Sac",
    targetReward: 18,
    captureReward: 18,
    brokenPartReward: 0,
    carve: 15,
    droppedMaterial:0
  },
  {
    MonsterId:33,
    RankId:1,
    name: "Monster Bone M",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:33,
    RankId:2,
    name: "Pearl Hide",
    targetReward: 14,
    captureReward: 16,
    brokenPartReward: 100,
    carve: 37,
    droppedMaterial:50
  },
  {
    MonsterId:33,
    RankId:2,
    name: "Suspicious Fang+",
    targetReward: 20,
    captureReward: 34,
    brokenPartReward: 52,
    carve: 24,
    droppedMaterial:27
  },
  {
    MonsterId:33,
    RankId:2,
    name: "Pale Extract",
    targetReward: 14,
    captureReward: 19,
    brokenPartReward: 20,
    carve: 19,
    droppedMaterial:70
  },
  {
    MonsterId:33,
    RankId:2,
    name: "Pale Bone",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 16,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:33,
    RankId:2,
    name: "Pale Steak",
    targetReward: 8,
    captureReward: 10,
    brokenPartReward: 12,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:33,
    RankId:2,
    name: "Thunder Sac",
    targetReward: 21,
    captureReward: 18,
    brokenPartReward: 0,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:33,
    RankId:2,
    name: "Monster Keenbone",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:33,
    RankId:2,
    name: "Wyvern Gem",
    targetReward: 1,
    captureReward: 3,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:1
  },
  {
    MonsterId:33,
    RankId:3,
    name: "Pearl Glosshide",
    targetReward: 16,
    captureReward: 15,
    brokenPartReward: 100,
    carve: 37,
    droppedMaterial:50
  },
  {
    MonsterId:33,
    RankId:3,
    name: "Mystic Hardfang",
    targetReward: 29,
    captureReward: 33,
    brokenPartReward: 52,
    carve: 24,
    droppedMaterial:27
  },
  {
    MonsterId:33,
    RankId:3,
    name: "Pale Extract",
    targetReward: 14,
    captureReward: 16,
    brokenPartReward: 20,
    carve: 19,
    droppedMaterial:22
  },
  {
    MonsterId:33,
    RankId:3,
    name: "Khezu Special Cut",
    targetReward: 8,
    captureReward: 10,
    brokenPartReward: 12,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:33,
    RankId:3,
    name: "Lightning Sac",
    targetReward: 21,
    captureReward: 18,
    brokenPartReward: 0,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:33,
    RankId:3,
    name: "Monster Toughbone",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:33,
    RankId:3,
    name: "Large Wyvern Gem",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:1
  },
  {
    MonsterId:33,
    RankId:3,
    name: "Wyvern Gem",
    targetReward: 0,
    captureReward: 5,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:33,
    RankId:3,
    name: "Pale Steak",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 16,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:33,
    RankId:3,
    name: "Afflicted Blood",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:34,
    RankId:1,
    name: "Kulu-Ya-Ku Scale",
    targetReward: 25,
    captureReward: 22,
    brokenPartReward: 20,
    carve: 46,
    droppedMaterial:35
  },
  {
    MonsterId:34,
    RankId:1,
    name: "Kulu-Ya-Ku Hide",
    targetReward: 41,
    captureReward: 43,
    brokenPartReward: 20,
    carve: 36,
    droppedMaterial:40
  },
  {
    MonsterId:34,
    RankId:1,
    name: "Kulu-Ya-Ku Plume",
    targetReward: 13,
    captureReward: 23,
    brokenPartReward: 80,
    carve: 18,
    droppedMaterial:15
  },
  {
    MonsterId:34,
    RankId:1,
    name: "Kulu-Ya-Ku Beak",
    targetReward: 7,
    captureReward: 12,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:34,
    RankId:1,
    name: "Monster Bone M",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:34,
    RankId:2,
    name: "Kulu-Ya-Ku Scale+",
    targetReward: 24,
    captureReward: 22,
    brokenPartReward: 20,
    carve: 44,
    droppedMaterial:34
  },
  {
    MonsterId:34,
    RankId:2,
    name: "Kulu-Ya-Ku Hide+",
    targetReward: 41,
    captureReward: 41,
    brokenPartReward: 15,
    carve: 35,
    droppedMaterial:40
  },
  {
    MonsterId:34,
    RankId:2,
    name: "Kulu-Ya-Ku Plume+",
    targetReward: 13,
    captureReward: 20,
    brokenPartReward: 80,
    carve: 18,
    droppedMaterial:15
  },
  {
    MonsterId:34,
    RankId:2,
    name: "Kulu-Ya-Ku Beak+",
    targetReward: 7,
    captureReward: 12,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:34,
    RankId:2,
    name: "Monster Bone+",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:34,
    RankId:2,
    name: "Bird Wyvern Gem",
    targetReward: 3,
    captureReward: 5,
    brokenPartReward: 5,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:34,
    RankId:3,
    name: "Kulu-Ya-Ku Shard",
    targetReward: 24,
    captureReward: 21,
    brokenPartReward: 20,
    carve: 44,
    droppedMaterial:34
  },
  {
    MonsterId:34,
    RankId:3,
    name: "Kulu-Ya-Ku Thickhide",
    targetReward: 41,
    captureReward: 38,
    brokenPartReward: 15,
    carve: 35,
    droppedMaterial:40
  },
  {
    MonsterId:34,
    RankId:3,
    name: "Large Kulu-Ya-Ku Plume",
    targetReward: 14,
    captureReward: 19,
    brokenPartReward: 80,
    carve: 18,
    droppedMaterial:15
  },
  {
    MonsterId:34,
    RankId:3,
    name: "Colossal Drill Beak",
    targetReward: 8,
    captureReward: 12,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:34,
    RankId:3,
    name: "Monster Hardbone",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:34,
    RankId:3,
    name: "Fey Wyvern Gem",
    targetReward: 3,
    captureReward: 4,
    brokenPartReward: 5,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:34,
    RankId:3,
    name: "Bird Wyvern Gem",
    targetReward: 0,
    captureReward: 6,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:34,
    RankId:3,
    name: "Afflicted Pelt",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:35,
    RankId:2,
    name: "Daora Carapace",
    targetReward: 16,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 30,
    droppedMaterial:34
  },
  {
    MonsterId:35,
    RankId:2,
    name: "Daora Dragon Scale+",
    targetReward: 32,
    captureReward: 0,
    brokenPartReward: 17,
    carve: 24,
    droppedMaterial:45
  },
  {
    MonsterId:35,
    RankId:2,
    name: "Daora Claw+",
    targetReward: 21,
    captureReward: 0,
    brokenPartReward: 30,
    carve: 15,
    droppedMaterial:10
  },
  {
    MonsterId:35,
    RankId:2,
    name: "Daora Webbing",
    targetReward: 16,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:35,
    RankId:2,
    name: "Daora Tail",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:35,
    RankId:2,
    name: "Daora Gem",
    targetReward: 3,
    captureReward: 0,
    brokenPartReward: 3,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:35,
    RankId:2,
    name: "Daora Horn+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 17,
    droppedMaterial:0
  },
  {
    MonsterId:35,
    RankId:2,
    name: "Elder Dragon Blood",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:15
  },
  {
    MonsterId:35,
    RankId:3,
    name: "Daora Cortex",
    targetReward: 16,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 27,
    droppedMaterial:34
  },
  {
    MonsterId:35,
    RankId:3,
    name: "Daora Shard",
    targetReward: 28,
    captureReward: 0,
    brokenPartReward: 12,
    carve: 23,
    droppedMaterial:25
  },
  {
    MonsterId:35,
    RankId:3,
    name: "Daora Hardclaw",
    targetReward: 21,
    captureReward: 0,
    brokenPartReward: 30,
    carve: 17,
    droppedMaterial:10
  },
  {
    MonsterId:35,
    RankId:3,
    name: "Daora Fellwing",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:35,
    RankId:3,
    name: "Daora Lash",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:35,
    RankId:3,
    name: "Daora Gem",
    targetReward: 5,
    captureReward: 0,
    brokenPartReward: 5,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:35,
    RankId:3,
    name: "Large Elder Dragon Gem",
    targetReward: 3,
    captureReward: 0,
    brokenPartReward: 3,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:35,
    RankId:3,
    name: "Daora Hardhorn",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 21,
    droppedMaterial:0
  },
  {
    MonsterId:35,
    RankId:3,
    name: "Elder Dragon Blood",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:15
  },
  {
    MonsterId:36,
    RankId:1,
    name: "Lagombi Pelt",
    targetReward: 22,
    captureReward: 16,
    brokenPartReward: 20,
    carve: 39,
    droppedMaterial:40
  },
  {
    MonsterId:36,
    RankId:1,
    name: "Lagombi Plastron",
    targetReward: 39,
    captureReward: 37,
    brokenPartReward: 0,
    carve: 30,
    droppedMaterial:35
  },
  {
    MonsterId:36,
    RankId:1,
    name: "Lagombi Iceclaw",
    targetReward: 23,
    captureReward: 16,
    brokenPartReward: 0,
    carve: 24,
    droppedMaterial:10
  },
  {
    MonsterId:36,
    RankId:1,
    name: "Jumbo Bone",
    targetReward: 16,
    captureReward: 5,
    brokenPartReward: 0,
    carve: 7,
    droppedMaterial:0
  },
  {
    MonsterId:36,
    RankId:1,
    name: "Lagombi Ear",
    targetReward: 0,
    captureReward: 26,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:36,
    RankId:2,
    name: "Lagombi Pelt+",
    targetReward: 21,
    captureReward: 14,
    brokenPartReward: 12,
    carve: 38,
    droppedMaterial:39
  },
  {
    MonsterId:36,
    RankId:2,
    name: "Lagombi Plastron+",
    targetReward: 38,
    captureReward: 32,
    brokenPartReward: 0,
    carve: 27,
    droppedMaterial:35
  },
  {
    MonsterId:36,
    RankId:2,
    name: "Lagombi Frozenclaw+",
    targetReward: 22,
    captureReward: 16,
    brokenPartReward: 0,
    carve: 24,
    droppedMaterial:10
  },
  {
    MonsterId:36,
    RankId:2,
    name: "Stoutbone",
    targetReward: 14,
    captureReward: 5,
    brokenPartReward: 0,
    carve: 8,
    droppedMaterial:0
  },
  {
    MonsterId:36,
    RankId:2,
    name: "Beast Gem",
    targetReward: 5,
    captureReward: 7,
    brokenPartReward: 8,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:36,
    RankId:2,
    name: "Lagombi Ear+",
    targetReward: 0,
    captureReward: 26,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:36,
    RankId:3,
    name: "Lagombi Fur",
    targetReward: 21,
    captureReward: 14,
    brokenPartReward: 15,
    carve: 36,
    droppedMaterial:35
  },
  {
    MonsterId:36,
    RankId:3,
    name: "Lagombi Cuirass",
    targetReward: 36,
    captureReward: 31,
    brokenPartReward: 0,
    carve: 27,
    droppedMaterial:35
  },
  {
    MonsterId:36,
    RankId:3,
    name: "Lagombi Frigidclaw",
    targetReward: 25,
    captureReward: 17,
    brokenPartReward: 0,
    carve: 23,
    droppedMaterial:10
  },
  {
    MonsterId:36,
    RankId:3,
    name: "Massive Bone",
    targetReward: 15,
    captureReward: 5,
    brokenPartReward: 0,
    carve: 8,
    droppedMaterial:0
  },
  {
    MonsterId:36,
    RankId:3,
    name: "Large Beast Gem",
    targetReward: 3,
    captureReward: 3,
    brokenPartReward: 5,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:36,
    RankId:3,
    name: "Lagombi Auricle",
    targetReward: 0,
    captureReward: 26,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:36,
    RankId:3,
    name: "Beast Gem",
    targetReward: 0,
    captureReward: 6,
    brokenPartReward: 0,
    carve: 4,
    droppedMaterial:4
  },
  {
    MonsterId:36,
    RankId:3,
    name: "Afflicted Bone",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:37,
    RankId:3,
    name: "Lunagaron Cortex",
    targetReward: 14,
    captureReward: 16,
    brokenPartReward: 20,
    carve: 26,
    droppedMaterial:35
  },
  {
    MonsterId:37,
    RankId:3,
    name: "Lunagaron Shard",
    targetReward: 34,
    captureReward: 33,
    brokenPartReward: 27,
    carve: 37,
    droppedMaterial:29
  },
  {
    MonsterId:37,
    RankId:3,
    name: "Luna Vermillion Hardclaw",
    targetReward: 23,
    captureReward: 27,
    brokenPartReward: 50,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:37,
    RankId:3,
    name: "Frostborn Hardfang",
    targetReward: 18,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 23,
    droppedMaterial:15
  },
  {
    MonsterId:37,
    RankId:3,
    name: "Lunagaron Bluecore",
    targetReward: 8,
    captureReward: 9,
    brokenPartReward: 0,
    carve: 12,
    droppedMaterial:20
  },
  {
    MonsterId:37,
    RankId:3,
    name: "Lunagaron Frost Jewel",
    targetReward: 3,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:37,
    RankId:3,
    name: "Lunagaron Lash Shell",
    targetReward: 0,
    captureReward: 12,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:38,
    RankId:3,
    name: "Magmadron Shard",
    targetReward: 18,
    captureReward: 16,
    brokenPartReward: 70,
    carve: 38,
    droppedMaterial:19
  },
  {
    MonsterId:38,
    RankId:3,
    name: "Magmadron Cortex",
    targetReward: 26,
    captureReward: 23,
    brokenPartReward: 30,
    carve: 27,
    droppedMaterial:28
  },
  {
    MonsterId:38,
    RankId:3,
    name: "Large Magmadron Fin",
    targetReward: 17,
    captureReward: 0,
    brokenPartReward: 17,
    carve: 22,
    droppedMaterial:0
  },
  {
    MonsterId:38,
    RankId:3,
    name: "Magmadron Hardwhisker",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:38,
    RankId:3,
    name: "Magmadron Tail",
    targetReward: 6,
    captureReward: 12,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:38,
    RankId:3,
    name: "Inferno Lava Mud",
    targetReward: 21,
    captureReward: 14,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:30
  },
  {
    MonsterId:38,
    RankId:3,
    name: "Magmadron Mantle",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:38,
    RankId:3,
    name: "Magmadron Hardclaw",
    targetReward: 0,
    captureReward: 32,
    brokenPartReward: 90,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:39,
    RankId:1,
    name: "Magnamalo Scale",
    targetReward: 17,
    captureReward: 0,
    brokenPartReward: 36,
    carve: 36,
    droppedMaterial:19
  },
  {
    MonsterId:39,
    RankId:1,
    name: "Magnamalo Shell",
    targetReward: 29,
    captureReward: 37,
    brokenPartReward: 0,
    carve: 21,
    droppedMaterial:26
  },
  {
    MonsterId:39,
    RankId:1,
    name: "Magnamalo Blade",
    targetReward: 21,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 16,
    droppedMaterial:0
  },
  {
    MonsterId:39,
    RankId:1,
    name: "Magnamalo Scute",
    targetReward: 7,
    captureReward: 19,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:8
  },
  {
    MonsterId:39,
    RankId:1,
    name: "Magnamalo Tail",
    targetReward: 8,
    captureReward: 15,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:39,
    RankId:1,
    name: "Magnamaalo Ghostprism",
    targetReward: 16,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 26,
    droppedMaterial:30
  },
  {
    MonsterId:39,
    RankId:1,
    name: "Magnamalo Plate",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:39,
    RankId:1,
    name: "Magnamalo Horn",
    targetReward: 0,
    captureReward: 26,
    brokenPartReward: 97,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:39,
    RankId:2,
    name: "Magnamalo Scale+",
    targetReward: 18,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 34,
    droppedMaterial:16
  },
  {
    MonsterId:39,
    RankId:2,
    name: "Magnamalo Shell+",
    targetReward: 30,
    captureReward: 35,
    brokenPartReward: 0,
    carve: 20,
    droppedMaterial:26
  },
  {
    MonsterId:39,
    RankId:2,
    name: "Magnamalo Blade+",
    targetReward: 22,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 16,
    droppedMaterial:0
  },
  {
    MonsterId:39,
    RankId:2,
    name: "Magnamalo Scute+",
    targetReward: 8,
    captureReward: 18,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:8
  },
  {
    MonsterId:39,
    RankId:2,
    name: "Magnamalo Soulprism",
    targetReward: 16,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 26,
    droppedMaterial:30
  },
  {
    MonsterId:39,
    RankId:2,
    name: "Magnamalo Plate",
    targetReward: 5,
    captureReward: 5,
    brokenPartReward: 5,
    carve: 3,
    droppedMaterial:3
  },
  {
    MonsterId:39,
    RankId:2,
    name: "Purple Magna Orb",
    targetReward: 1,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:39,
    RankId:2,
    name: "Magnamalo Horn+",
    targetReward: 0,
    captureReward: 25,
    brokenPartReward: 92,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:39,
    RankId:2,
    name: "Magnamalo Tail",
    targetReward: 0,
    captureReward: 14,
    brokenPartReward: 0,
    carve: 75,
    droppedMaterial:0
  },
  {
    MonsterId:39,
    RankId:3,
    name: "Magnamalo Shard",
    targetReward: 16,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 33,
    droppedMaterial:16
  },
  {
    MonsterId:39,
    RankId:3,
    name: "Magnamalo Cortex",
    targetReward: 28,
    captureReward: 35,
    brokenPartReward: 0,
    carve: 20,
    droppedMaterial:26
  },
  {
    MonsterId:39,
    RankId:3,
    name: "Magna Ascended Blade",
    targetReward: 21,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 16,
    droppedMaterial:0
  },
  {
    MonsterId:39,
    RankId:3,
    name: "Magnamalo Bladeshell",
    targetReward: 8,
    captureReward: 18,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:8
  },
  {
    MonsterId:39,
    RankId:3,
    name: "Magnamalo Speartail",
    targetReward: 6,
    captureReward: 14,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:39,
    RankId:3,
    name: "Magna Soulprism",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 25,
    droppedMaterial:1
  },
  {
    MonsterId:39,
    RankId:3,
    name: "Purple Magna Orb",
    targetReward: 4,
    captureReward: 5,
    brokenPartReward: 5,
    carve: 4,
    droppedMaterial:3
  },
  {
    MonsterId:39,
    RankId:3,
    name: "Magnamalo Orb",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:39,
    RankId:3,
    name: "Magnamalo Hellhorn",
    targetReward: 0,
    captureReward: 25,
    brokenPartReward: 92,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:39,
    RankId:3,
    name: "Afflicted Fang",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:40,
    RankId:3,
    name: "Malzeno Cortex",
    targetReward: 22,
    captureReward: 0,
    brokenPartReward: 15,
    carve: 37,
    droppedMaterial:27
  },
  {
    MonsterId:40,
    RankId:3,
    name: "Malzeno Shard",
    targetReward: 29,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 28,
    droppedMaterial:30
  },
  {
    MonsterId:40,
    RankId:3,
    name: "Malzeno Hardfang",
    targetReward: 20,
    captureReward: 0,
    brokenPartReward: 17,
    carve: 21,
    droppedMaterial:0
  },
  {
    MonsterId:40,
    RankId:3,
    name: "Bloody Parasite",
    targetReward: 16,
    captureReward: 0,
    brokenPartReward: 30,
    carve: 0,
    droppedMaterial:20
  },
  {
    MonsterId:40,
    RankId:3,
    name: "Malzeno Tail",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:40,
    RankId:3,
    name: "Malzeno Bloodstone",
    targetReward: 3,
    captureReward: 0,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:3
  },
  {
    MonsterId:40,
    RankId:3,
    name: "Malzeno Hardhorn",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:40,
    RankId:3,
    name: "Malzeno Fellwing",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 85,
    carve: 13,
    droppedMaterial:0
  },
  {
    MonsterId:41,
    RankId:1,
    name: "Mizutsune Scale",
    targetReward: 21,
    captureReward: 16,
    brokenPartReward: 0,
    carve: 39,
    droppedMaterial:19
  },
  {
    MonsterId:41,
    RankId:1,
    name: "Mizutsune Purple fur",
    targetReward: 31,
    captureReward: 23,
    brokenPartReward: 30,
    carve: 26,
    droppedMaterial:30
  },
  {
    MonsterId:41,
    RankId:1,
    name: "Mizutsune Claw",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 13,
    droppedMaterial:0
  },
  {
    MonsterId:41,
    RankId:1,
    name: "Bubblefoam",
    targetReward: 24,
    captureReward: 14,
    brokenPartReward: 32,
    carve: 21,
    droppedMaterial:30
  },
  {
    MonsterId:41,
    RankId:1,
    name: "Mizutsune Tail",
    targetReward: 7,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:41,
    RankId:1,
    name: "Mizutsune Plate",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:41,
    RankId:1,
    name: "Mizutsune Fin",
    targetReward: 0,
    captureReward: 32,
    brokenPartReward: 65,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:41,
    RankId:2,
    name: "Mizutsune Scale+",
    targetReward: 19,
    captureReward: 17,
    brokenPartReward: 0,
    carve: 38,
    droppedMaterial:18
  },
  {
    MonsterId:41,
    RankId:2,
    name: "Mizutsune Purplefur+",
    targetReward: 31,
    captureReward: 27,
    brokenPartReward: 30,
    carve: 25,
    droppedMaterial:30
  },
  {
    MonsterId:41,
    RankId:2,
    name: "Mizutsune Claw+",
    targetReward: 15,
    captureReward: 22,
    brokenPartReward: 80,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:41,
    RankId:2,
    name: "Bubblefoam+",
    targetReward: 23,
    captureReward: 16,
    brokenPartReward: 30,
    carve: 21,
    droppedMaterial:28
  },
  {
    MonsterId:41,
    RankId:2,
    name: "Mizutsune Tail",
    targetReward: 5,
    captureReward: 8,
    brokenPartReward: 0,
    carve: 75,
    droppedMaterial:0
  },
  {
    MonsterId:41,
    RankId:2,
    name: "MMizutsune Plate",
    targetReward: 5,
    captureReward: 7,
    brokenPartReward: 7,
    carve: 3,
    droppedMaterial:3
  },
  {
    MonsterId:41,
    RankId:2,
    name: "Mizustune Water Orb",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:41,
    RankId:2,
    name: "Mizutsune Fin+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 60,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:41,
    RankId:3,
    name: "Mizutsune Shard",
    targetReward: 19,
    captureReward: 17,
    brokenPartReward: 0,
    carve: 38,
    droppedMaterial:18
  },
  {
    MonsterId:41,
    RankId:3,
    name: "Mizutsune Purplefell",
    targetReward: 31,
    captureReward: 27,
    brokenPartReward: 30,
    carve: 25,
    droppedMaterial:30
  },
  {
    MonsterId:41,
    RankId:3,
    name: "Mizutsune Hardclaw",
    targetReward: 15,
    captureReward: 22,
    brokenPartReward: 80,
    carve: 25,
    droppedMaterial:30
  },
  {
    MonsterId:41,
    RankId:3,
    name: "Distilled Bubblefoam",
    targetReward: 23,
    captureReward: 16,
    brokenPartReward: 30,
    carve: 21,
    droppedMaterial:28
  },
  {
    MonsterId:41,
    RankId:3,
    name: "Purple Mizutsune Tail",
    targetReward: 5,
    captureReward: 8,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:41,
    RankId:3,
    name: "Mizutsune Water Orb",
    targetReward: 5,
    captureReward: 7,
    brokenPartReward: 7,
    carve: 3,
    droppedMaterial:3
  },
  {
    MonsterId:41,
    RankId:3,
    name: "Mizutsune Mantle",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:41,
    RankId:3,
    name: "Mizutsune Silkfin",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 60,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:42,
    RankId:1,
    name: "Nargacuga Blackfur",
    targetReward: 14,
    captureReward: 28,
    brokenPartReward: 0,
    carve: 22,
    droppedMaterial:40
  },
  {
    MonsterId:42,
    RankId:1,
    name: "Nargacuga Scale",
    targetReward: 30,
    captureReward: 15,
    brokenPartReward: 30,
    carve: 43,
    droppedMaterial:25
  },
  {
    MonsterId:42,
    RankId:1,
    name: "Nargacuga Fang",
    targetReward: 15,
    captureReward: 24,
    brokenPartReward: 25,
    carve: 16,
    droppedMaterial:10
  },
  {
    MonsterId:42,
    RankId:1,
    name: "Nargacuga Cutwing",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 65,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:42,
    RankId:1,
    name: "Narga Tailspike",
    targetReward: 14,
    captureReward: 20,
    brokenPartReward: 0,
    carve: 8,
    droppedMaterial:15
  },
  {
    MonsterId:42,
    RankId:1,
    name: "Nargacuga Tail",
    targetReward: 8,
    captureReward: 10,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:42,
    RankId:1,
    name: "Nargacuga Marrow",
    targetReward: 7,
    captureReward: 3,
    brokenPartReward: 0,
    carve: 7,
    droppedMaterial:0
  },
  {
    MonsterId:42,
    RankId:2,
    name: "Nargacuga Pelt+",
    targetReward: 14,
    captureReward: 28,
    brokenPartReward: 0,
    carve: 22,
    droppedMaterial:40
  },
  {
    MonsterId:42,
    RankId:2,
    name: "Nargacuga Scale+",
    targetReward: 30,
    captureReward: 17,
    brokenPartReward: 30,
    carve: 27,
    droppedMaterial:37
  },
  {
    MonsterId:42,
    RankId:2,
    name: "Nargacuga Fang+",
    targetReward: 19,
    captureReward: 21,
    brokenPartReward: 25,
    carve: 14,
    droppedMaterial:12
  },
  {
    MonsterId:42,
    RankId:2,
    name: "Nargacuga Razor",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 65,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:42,
    RankId:2,
    name: "Narga Tailspike",
    targetReward: 8,
    captureReward: 15,
    brokenPartReward: 0,
    carve: 5,
    droppedMaterial:10
  },
  {
    MonsterId:42,
    RankId:2,
    name: "Nargacuga Tail",
    targetReward: 6,
    captureReward: 7,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:42,
    RankId:2,
    name: "Narga Medulla",
    targetReward: 5,
    captureReward: 3,
    brokenPartReward: 0,
    carve: 7,
    droppedMaterial:0
  },
  {
    MonsterId:42,
    RankId:2,
    name: "Wyvern Gem",
    targetReward: 3,
    captureReward: 4,
    brokenPartReward: 0,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:42,
    RankId:2,
    name: "Nargacuga Marrow",
    targetReward: 0,
    captureReward: 5,
    brokenPartReward: 0,
    carve: 9,
    droppedMaterial:0
  },
  {
    MonsterId:42,
    RankId:3,
    name: "Nargacuga Blackfur+",
    targetReward: 20,
    captureReward: 28,
    brokenPartReward: 0,
    carve: 23,
    droppedMaterial:40
  },
  {
    MonsterId:42,
    RankId:3,
    name: "Nargacuga Shard",
    targetReward: 27,
    captureReward: 17,
    brokenPartReward: 27,
    carve: 42,
    droppedMaterial:24
  },
  {
    MonsterId:42,
    RankId:3,
    name: "Nargacuga Hardfang",
    targetReward: 15,
    captureReward: 21,
    brokenPartReward: 25,
    carve: 16,
    droppedMaterial:10
  },
  {
    MonsterId:42,
    RankId:3,
    name: "Nargacuga Cutwing+",
    targetReward: 11,
    captureReward: 0,
    brokenPartReward: 65,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:42,
    RankId:3,
    name: "Nargacuga Tailspear",
    targetReward: 12,
    captureReward: 20,
    brokenPartReward: 0,
    carve: 15,
    droppedMaterial:15
  },
  {
    MonsterId:42,
    RankId:3,
    name: "Nargacuga Lash",
    targetReward: 6,
    captureReward: 10,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:42,
    RankId:3,
    name: "Narga Medulla",
    targetReward: 7,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:42,
    RankId:3,
    name: "Nargacuga Mantle",
    targetReward: 2,
    captureReward: 4,
    brokenPartReward: 3,
    carve: 5,
    droppedMaterial:1
  },
  {
    MonsterId:42,
    RankId:3,
    name: "Large Wyvern Gem",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:42,
    RankId:3,
    name: "Afflicted Fang",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:43,
    RankId:2,
    name: "Scale of Origin",
    targetReward: 26,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 42,
    droppedMaterial:42
  },
  {
    MonsterId:43,
    RankId:2,
    name: "Narwa Hide+",
    targetReward: 28,
    captureReward: 0,
    brokenPartReward: 87,
    carve: 25,
    droppedMaterial:25
  },
  {
    MonsterId:43,
    RankId:2,
    name: "Horn of Origin",
    targetReward: 16,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:43,
    RankId:2,
    name: "Narwa Sparksac",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 60,
    carve: 75,
    droppedMaterial:0
  },
  {
    MonsterId:43,
    RankId:2,
    name: "Narwa Tentacle",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 40,
    carve: 11,
    droppedMaterial:0
  },
  {
    MonsterId:43,
    RankId:2,
    name: "Orb of Origin",
    targetReward: 3,
    captureReward: 0,
    brokenPartReward: 5,
    carve: 5,
    droppedMaterial:1
  },
  {
    MonsterId:43,
    RankId:2,
    name: "Thunder Serpent Orb",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 5,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:43,
    RankId:2,
    name: "Wind Serpent Orb",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 5,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:43,
    RankId:2,
    name: "Narwa Claw+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 20,
    droppedMaterial:10
  },
  {
    MonsterId:43,
    RankId:2,
    name: "Elder Dragon Blood",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:27
  },
  {
    MonsterId:43,
    RankId:3,
    name: "Scale of Origin+",
    targetReward: 20,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 37,
    droppedMaterial:55
  },
  {
    MonsterId:43,
    RankId:3,
    name: "Narwa Thickhide",
    targetReward: 31,
    captureReward: 0,
    brokenPartReward: 17,
    carve: 29,
    droppedMaterial:30
  },
  {
    MonsterId:43,
    RankId:3,
    name: "Horn of Origin+",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:43,
    RankId:3,
    name: "Narwa Lightning Sac",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 60,
    carve: 80,
    droppedMaterial:30
  },
  {
    MonsterId:43,
    RankId:3,
    name: "Narwa Tentacle+",
    targetReward: 17,
    captureReward: 0,
    brokenPartReward: 40,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:43,
    RankId:3,
    name: "Orb of Origin",
    targetReward: 4,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:3
  },
  {
    MonsterId:43,
    RankId:3,
    name: "Mantle of Origin",
    targetReward: 2,
    captureReward: 0,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:43,
    RankId:3,
    name: "Thunder Serpent Orb",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 7,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:43,
    RankId:3,
    name: "Wind Serpent Orb",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 7,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:43,
    RankId:3,
    name: "Narwa Hardclaw",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 21,
    droppedMaterial:20
  },
  {
    MonsterId:43,
    RankId:3,
    name: "Pure Dragon Blood",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:16
  },
  {
    MonsterId:44,
    RankId:1,
    name: "Pukei-Pukei Scale",
    targetReward: 20,
    captureReward: 19,
    brokenPartReward: 25,
    carve: 42,
    droppedMaterial:35
  },
  {
    MonsterId:44,
    RankId:1,
    name: "Pukei-Pukei Shell",
    targetReward: 27,
    captureReward: 31,
    brokenPartReward: 80,
    carve: 32,
    droppedMaterial:15
  },
  {
    MonsterId:44,
    RankId:1,
    name: "Pukei-Pukei Quill",
    targetReward: 11,
    captureReward: 16,
    brokenPartReward: 80,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:44,
    RankId:1,
    name: "Pukei-Pukei Tail",
    targetReward: 7,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:44,
    RankId:1,
    name: "Pukei-Pukei Sac",
    targetReward: 14,
    captureReward: 22,
    brokenPartReward: 75,
    carve: 16,
    droppedMaterial:0
  },
  {
    MonsterId:44,
    RankId:1,
    name: "Posion Sac",
    targetReward: 11,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:44,
    RankId:1,
    name: "Monster Bone L",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:44,
    RankId:2,
    name: "Pukei-Pukei Scale+",
    targetReward: 21,
    captureReward: 19,
    brokenPartReward: 22,
    carve: 42,
    droppedMaterial:34
  },
  {
    MonsterId:44,
    RankId:2,
    name: "Pukei-Pukei Carapace",
    targetReward: 28,
    captureReward: 34,
    brokenPartReward: 80,
    carve: 32,
    droppedMaterial:15
  },
  {
    MonsterId:44,
    RankId:2,
    name: "Pukei-Pukei Wing",
    targetReward: 12,
    captureReward: 15,
    brokenPartReward: 80,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:44,
    RankId:2,
    name: "Pukei-Pukei Sac+",
    targetReward: 15,
    captureReward: 18,
    brokenPartReward: 75,
    carve: 16,
    droppedMaterial:0
  },
  {
    MonsterId:44,
    RankId:2,
    name: "Toxin Sac",
    targetReward: 11,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:44,
    RankId:2,
    name: "Monster Keenbone",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:44,
    RankId:2,
    name: "Bird Wyvern Gem",
    targetReward: 3,
    captureReward: 5,
    brokenPartReward: 3,
    carve: 4,
    droppedMaterial:1
  },
  {
    MonsterId:44,
    RankId:2,
    name: "Pukei-Pukei Tail",
    targetReward: 0,
    captureReward: 9,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:44,
    RankId:3,
    name: "Pukei-Pukei Shard",
    targetReward: 18,
    captureReward: 19,
    brokenPartReward: 22,
    carve: 42,
    droppedMaterial:34
  },
  {
    MonsterId:44,
    RankId:3,
    name: "Pukei-Pukei Cortex",
    targetReward: 26,
    captureReward: 33,
    brokenPartReward: 80,
    carve: 32,
    droppedMaterial:15
  },
  {
    MonsterId:44,
    RankId:3,
    name: "Pukei-Pukei Fellwing",
    targetReward: 11,
    captureReward: 15,
    brokenPartReward: 80,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:44,
    RankId:3,
    name: "Large Pukei-Pukei Sac",
    targetReward: 14,
    captureReward: 16,
    brokenPartReward: 75,
    carve: 16,
    droppedMaterial:0
  },
  {
    MonsterId:44,
    RankId:3,
    name: "Pukei-Pukei Lash",
    targetReward: 7,
    captureReward: 9,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:44,
    RankId:3,
    name: "Deadly Poison Sac",
    targetReward: 11,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:44,
    RankId:3,
    name: "Monster Toughbone",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:44,
    RankId:3,
    name: "Fey Wyvern Gem",
    targetReward: 3,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 4,
    droppedMaterial:1
  },
  {
    MonsterId:44,
    RankId:3,
    name: "Bird Wyvern Gem",
    targetReward: 0,
    captureReward: 5,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:44,
    RankId:3,
    name: "Afflicted Scale",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:45,
    RankId:3,
    name: "Pyre-Kadaki Cortex",
    targetReward: 17,
    captureReward: 25,
    brokenPartReward: 50,
    carve: 33,
    droppedMaterial:60
  },
  {
    MonsterId:45,
    RankId:3,
    name: "Pyre-Kadaki Silk+",
    targetReward: 15,
    captureReward: 20,
    brokenPartReward: 30,
    carve: 13,
    droppedMaterial:40
  },
  {
    MonsterId:45,
    RankId:3,
    name: "Pyre-Kadaki Dull Glowgut",
    targetReward: 17,
    captureReward: 0,
    brokenPartReward: 60,
    carve: 16,
    droppedMaterial:0
  },
  {
    MonsterId:45,
    RankId:3,
    name: "Pyre-Kadaki Hardclaw",
    targetReward: 24,
    captureReward: 31,
    brokenPartReward: 100,
    carve: 24,
    droppedMaterial:0
  },
  {
    MonsterId:45,
    RankId:3,
    name: "Pyre-Kadaki Spike+",
    targetReward: 10,
    captureReward: 14,
    brokenPartReward: 40,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:45,
    RankId:3,
    name: "Monster Essence",
    targetReward: 17,
    captureReward: 10,
    brokenPartReward: 20,
    carve: 14,
    droppedMaterial:0
  },
  {
    MonsterId:45,
    RankId:3,
    name: "Queen Substance",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:50
  },
  {
    MonsterId:46,
    RankId:2,
    name: "Rajang Blackfur",
    targetReward: 16,
    captureReward: 27,
    brokenPartReward: 30,
    carve: 37,
    droppedMaterial:58
  },
  {
    MonsterId:46,
    RankId:2,
    name: "Rajang Claw+",
    targetReward: 19,
    captureReward: 20,
    brokenPartReward: 70,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:46,
    RankId:2,
    name: "Rajang Fang+",
    targetReward: 28,
    captureReward: 15,
    brokenPartReward: 0,
    carve: 27,
    droppedMaterial:30
  },
  {
    MonsterId:46,
    RankId:2,
    name: "Rajang Tail",
    targetReward: 7,
    captureReward: 12,
    brokenPartReward: 90,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:46,
    RankId:2,
    name: "Gold Rajang Pelt",
    targetReward: 12,
    captureReward: 16,
    brokenPartReward: 30,
    carve: 10,
    droppedMaterial:10
  },
  {
    MonsterId:46,
    RankId:2,
    name: "Beast Gem",
    targetReward: 8,
    captureReward: 10,
    brokenPartReward: 0,
    carve: 6,
    droppedMaterial:1
  },
  {
    MonsterId:46,
    RankId:2,
    name: "Great Stoutbone",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:46,
    RankId:2,
    name: "Rajang Horn+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:46,
    RankId:3,
    name: "Rajang Wildpelt",
    targetReward: 17,
    captureReward: 33,
    brokenPartReward: 30,
    carve: 37,
    droppedMaterial:29
  },
  {
    MonsterId:46,
    RankId:3,
    name: "Rajang Hardclaw",
    targetReward: 22,
    captureReward: 26,
    brokenPartReward: 70,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:46,
    RankId:3,
    name: "Rajang Hardfang",
    targetReward: 29,
    captureReward: 15,
    brokenPartReward: 0,
    carve: 27,
    droppedMaterial:30
  },
  {
    MonsterId:46,
    RankId:3,
    name: "Gold Rajang Pelt+",
    targetReward: 12,
    captureReward: 16,
    brokenPartReward: 30,
    carve: 10,
    droppedMaterial:10
  },
  {
    MonsterId:46,
    RankId:3,
    name: "Large Beast Gem",
    targetReward: 8,
    captureReward: 10,
    brokenPartReward: 0,
    carve: 6,
    droppedMaterial:1
  },
  {
    MonsterId:46,
    RankId:3,
    name: "Solid Bone",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:46,
    RankId:3,
    name: "Rajang Hardhorn",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:46,
    RankId:3,
    name: "Rajang Tail",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:47,
    RankId:2,
    name: "Rakna-Kadaki Carapace",
    targetReward: 17,
    captureReward: 25,
    brokenPartReward: 50,
    carve: 33,
    droppedMaterial:60
  },
  {
    MonsterId:47,
    RankId:2,
    name: "Rakna-Kadaki Silk",
    targetReward: 12,
    captureReward: 17,
    brokenPartReward: 30,
    carve: 13,
    droppedMaterial:40
  },
  {
    MonsterId:47,
    RankId:2,
    name: "Rakna-Kadaki Glowgut",
    targetReward: 17,
    captureReward: 0,
    brokenPartReward: 60,
    carve: 16,
    droppedMaterial:0
  },
  {
    MonsterId:47,
    RankId:2,
    name: "Rakna-Kadaki Sharpclaw",
    targetReward: 25,
    captureReward: 33,
    brokenPartReward: 100,
    carve: 24,
    droppedMaterial:0
  },
  {
    MonsterId:47,
    RankId:2,
    name: "Rakna-Kadaki Spike",
    targetReward: 10,
    captureReward: 15,
    brokenPartReward: 40,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:47,
    RankId:2,
    name: "Monster Broth",
    targetReward: 19,
    captureReward: 10,
    brokenPartReward: 20,
    carve: 14,
    droppedMaterial:0
  },
  {
    MonsterId:47,
    RankId:2,
    name: "Drone Substance",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:47,
    RankId:2,
    name: "Queen Substance",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:40
  },
  {
    MonsterId:47,
    RankId:3,
    name: "Rakna-Kadaki Cortex",
    targetReward: 17,
    captureReward: 25,
    brokenPartReward: 50,
    carve: 33,
    droppedMaterial:60
  },
  {
    MonsterId:47,
    RankId:3,
    name: "Rakna-Kadaki Silk+",
    targetReward: 12,
    captureReward: 17,
    brokenPartReward: 30,
    carve: 13,
    droppedMaterial:40
  },
  {
    MonsterId:47,
    RankId:3,
    name: "Rakna-Kadaki Glowgut+",
    targetReward: 17,
    captureReward: 0,
    brokenPartReward: 60,
    carve: 16,
    droppedMaterial:0
  },
  {
    MonsterId:47,
    RankId:3,
    name: "Rakna-Kadaki Hardclaw",
    targetReward: 25,
    captureReward: 33,
    brokenPartReward: 100,
    carve: 24,
    droppedMaterial:0
  },
  {
    MonsterId:47,
    RankId:3,
    name: "Rakna-Kadaki Spike+",
    targetReward: 10,
    captureReward: 15,
    brokenPartReward: 40,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:47,
    RankId:3,
    name: "Monster Essence",
    targetReward: 19,
    captureReward: 10,
    brokenPartReward: 20,
    carve: 14,
    droppedMaterial:0
  },
  {
    MonsterId:47,
    RankId:3,
    name: "Drone Substance",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:5
  },
  {
    MonsterId:47,
    RankId:3,
    name: "Queen Substance",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:45
  },
  {
    MonsterId:47,
    RankId:3,
    name: "Afflicted Claw",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:48,
    RankId:1,
    name: "Rathalos Scale",
    targetReward: 16,
    captureReward: 0,
    brokenPartReward: 66,
    carve: 38,
    droppedMaterial:37
  },
  {
    MonsterId:48,
    RankId:1,
    name: "Rathalos Shell",
    targetReward: 31,
    captureReward: 30,
    brokenPartReward: 30,
    carve: 24,
    droppedMaterial:30
  },
  {
    MonsterId:48,
    RankId:1,
    name: "Rathalos Webbing",
    targetReward: 23,
    captureReward: 27,
    brokenPartReward: 25,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:48,
    RankId:1,
    name: "Rathalos Tail",
    targetReward: 7,
    captureReward: 19,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:48,
    RankId:1,
    name: "Flame Sac",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:48,
    RankId:1,
    name: "Rathalos Marrow",
    targetReward: 7,
    captureReward: 7,
    brokenPartReward: 30,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:48,
    RankId:1,
    name: "Rathalos Plate",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 4,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:48,
    RankId:1,
    name: "Rath Wingtalon",
    targetReward: 0,
    captureReward: 14,
    brokenPartReward: 75,
    carve: 0,
    droppedMaterial:12
  },
  {
    MonsterId:48,
    RankId:2,
    name: "Rathalos Scale+",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 63,
    carve: 36,
    droppedMaterial:34
  },
  {
    MonsterId:48,
    RankId:2,
    name: "Rathalos Carapace",
    targetReward: 27,
    captureReward: 32,
    brokenPartReward: 26,
    carve: 24,
    droppedMaterial:30
  },
  {
    MonsterId:48,
    RankId:2,
    name: "Rathalos Wing",
    targetReward: 20,
    captureReward: 27,
    brokenPartReward: 30,
    carve: 19,
    droppedMaterial:0
  },
  {
    MonsterId:48,
    RankId:2,
    name: "Inferno Sac",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:48,
    RankId:2,
    name: "Rathalos Marrow",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:48,
    RankId:2,
    name: "Rathalos Medulla",
    targetReward: 7,
    captureReward: 7,
    brokenPartReward: 30,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:48,
    RankId:2,
    name: "Rathalos Plate",
    targetReward: 5,
    captureReward: 5,
    brokenPartReward: 7,
    carve: 3,
    droppedMaterial:3
  },
  {
    MonsterId:48,
    RankId:2,
    name: "Rathalos Ruby",
    targetReward: 1,
    captureReward: 3,
    brokenPartReward: 4,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:48,
    RankId:2,
    name: "Rathalos Tail",
    targetReward: 0,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 60,
    droppedMaterial:0
  },
  {
    MonsterId:48,
    RankId:2,
    name: "Rath Wingtalon+",
    targetReward: 0,
    captureReward: 14,
    brokenPartReward: 70,
    carve: 0,
    droppedMaterial:12
  },
  {
    MonsterId:48,
    RankId:3,
    name: "Rathalos Shard",
    targetReward: 17,
    captureReward: 0,
    brokenPartReward: 64,
    carve: 36,
    droppedMaterial:34
  },
  {
    MonsterId:48,
    RankId:3,
    name: "Rathalos Cortex",
    targetReward: 31,
    captureReward: 32,
    brokenPartReward: 26,
    carve: 24,
    droppedMaterial:30
  },
  {
    MonsterId:48,
    RankId:3,
    name: "Rathalos Fellwing",
    targetReward: 23,
    captureReward: 27,
    brokenPartReward: 30,
    carve: 19,
    droppedMaterial:0
  },
  {
    MonsterId:48,
    RankId:3,
    name: "Conflagrant Sac",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:48,
    RankId:3,
    name: "Rathalos Lash",
    targetReward: 7,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:48,
    RankId:3,
    name: "Rathalos Ruby",
    targetReward: 5,
    captureReward: 5,
    brokenPartReward: 7,
    carve: 3,
    droppedMaterial:3
  },
  {
    MonsterId:48,
    RankId:3,
    name: "Rathalos Mantle",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:48,
    RankId:3,
    name: "Rath Wingripper",
    targetReward: 0,
    captureReward: 14,
    brokenPartReward: 70,
    carve: 0,
    droppedMaterial:12
  },
  {
    MonsterId:48,
    RankId:3,
    name: "Rath Medulla",
    targetReward: 0,
    captureReward: 7,
    brokenPartReward: 30,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:49,
    RankId:1,
    name: "Rathian Scale",
    targetReward: 14,
    captureReward: 16,
    brokenPartReward: 60,
    carve: 38,
    droppedMaterial:45
  },
  {
    MonsterId:49,
    RankId:1,
    name: "Rathian Shell",
    targetReward: 28,
    captureReward: 34,
    brokenPartReward: 36,
    carve: 26,
    droppedMaterial:45
  },
  {
    MonsterId:49,
    RankId:1,
    name: "Rathian Webbing",
    targetReward: 19,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 17,
    droppedMaterial:0
  },
  {
    MonsterId:49,
    RankId:1,
    name: "Rathian Spike",
    targetReward: 7,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 5,
    droppedMaterial:4
  },
  {
    MonsterId:49,
    RankId:1,
    name: "Flame Sac",
    targetReward: 17,
    captureReward: 21,
    brokenPartReward: 0,
    carve: 13,
    droppedMaterial:0
  },
  {
    MonsterId:49,
    RankId:1,
    name: "Monster Bone L",
    targetReward: 13,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:49,
    RankId:1,
    name: "Rathian Plate",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 4,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:49,
    RankId:1,
    name: "Rath Wingtalon",
    targetReward: 0,
    captureReward: 14,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:15
  },
  {
    MonsterId:49,
    RankId:1,
    name: "Rathalos Marrow",
    targetReward: 0,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 7,
    droppedMaterial:0
  },
  {
    MonsterId:49,
    RankId:2,
    name: "Rathian Scale+",
    targetReward: 14,
    captureReward: 12,
    brokenPartReward: 60,
    carve: 43,
    droppedMaterial:42
  },
  {
    MonsterId:49,
    RankId:2,
    name: "Rathian Carapace",
    targetReward: 31,
    captureReward: 25,
    brokenPartReward: 30,
    carve: 31,
    droppedMaterial:39
  },
  {
    MonsterId:49,
    RankId:2,
    name: "Rathian Webbing",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:49,
    RankId:2,
    name: "Rathian Spike+",
    targetReward: 7,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 5,
    droppedMaterial:4
  },
  {
    MonsterId:49,
    RankId:2,
    name: "Inferno Sac",
    targetReward: 18,
    captureReward: 20,
    brokenPartReward: 0,
    carve: 17,
    droppedMaterial:0
  },
  {
    MonsterId:49,
    RankId:2,
    name: "Monster Keenbone",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:49,
    RankId:2,
    name: "Rathian Plate",
    targetReward: 5,
    captureReward: 5,
    brokenPartReward: 7,
    carve: 3,
    droppedMaterial:3
  },
  {
    MonsterId:49,
    RankId:2,
    name: "Rathian Ruby",
    targetReward: 1,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:49,
    RankId:2,
    name: "Rath Wingtalon+",
    targetReward: 0,
    captureReward: 13,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:15
  },
  {
    MonsterId:49,
    RankId:2,
    name: "Rathalos Marrow",
    targetReward: 0,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:49,
    RankId:2,
    name: "Rathalos Medulla",
    targetReward: 0,
    captureReward: 10,
    brokenPartReward: 0,
    carve: 7,
    droppedMaterial:0
  },
  {
    MonsterId:49,
    RankId:3,
    name: "Rathian Shard",
    targetReward: 14,
    captureReward: 14,
    brokenPartReward: 60,
    carve: 41,
    droppedMaterial:42
  },
  {
    MonsterId:49,
    RankId:3,
    name: "Rathian Cortex",
    targetReward: 27,
    captureReward: 28,
    brokenPartReward: 30,
    carve: 30,
    droppedMaterial:39
  },
  {
    MonsterId:49,
    RankId:3,
    name: "Rathian Weave",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:49,
    RankId:3,
    name: "Rathian Surspike",
    targetReward: 7,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 5,
    droppedMaterial:4
  },
  {
    MonsterId:49,
    RankId:3,
    name: "Conflagrant Sac",
    targetReward: 18,
    captureReward: 21,
    brokenPartReward: 0,
    carve: 17,
    droppedMaterial:0
  },
  {
    MonsterId:49,
    RankId:3,
    name: "Monster Toughbone",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:49,
    RankId:3,
    name: "Rathian Ruby",
    targetReward: 5,
    captureReward: 7,
    brokenPartReward: 7,
    carve: 5,
    droppedMaterial:3
  },
  {
    MonsterId:49,
    RankId:3,
    name: "Rathian Mantle",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:49,
    RankId:3,
    name: "Rath Wingripper",
    targetReward: 0,
    captureReward: 17,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:15
  },
  {
    MonsterId:49,
    RankId:3,
    name: "Rath Medulla",
    targetReward: 0,
    captureReward: 10,
    brokenPartReward: 0,
    carve: 15,
    droppedMaterial:0
  },
  {
    MonsterId:49,
    RankId:3,
    name: "Afflicted Scale",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:50,
    RankId:1,
    name: "Royal Ludroth Scale",
    targetReward: 11,
    captureReward: 16,
    brokenPartReward: 20,
    carve: 32,
    droppedMaterial:0
  },
  {
    MonsterId:50,
    RankId:1,
    name: "Royal Ludroth Claw",
    targetReward: 21,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 23,
    droppedMaterial:15
  },
  {
    MonsterId:50,
    RankId:1,
    name: "Spongy Hide",
    targetReward: 26,
    captureReward: 24,
    brokenPartReward: 60,
    carve: 30,
    droppedMaterial:35
  },
  {
    MonsterId:50,
    RankId:1,
    name: "Royal Ludroth Crest",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:50,
    RankId:1,
    name: "Royal Ludroth Tail",
    targetReward: 6,
    captureReward: 16,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:50,
    RankId:1,
    name: "Aqua Sac",
    targetReward: 14,
    captureReward: 14,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:50,
    RankId:1,
    name: "Dash Extract",
    targetReward: 12,
    captureReward: 30,
    brokenPartReward: 20,
    carve: 15,
    droppedMaterial:40
  },
  {
    MonsterId:50,
    RankId:2,
    name: "Royal Ludroth Scale+",
    targetReward: 12,
    captureReward: 18,
    brokenPartReward: 20,
    carve: 33,
    droppedMaterial:0
  },
  {
    MonsterId:50,
    RankId:2,
    name: "Royal Ludroth Claw+",
    targetReward: 22,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 24,
    droppedMaterial:15
  },
  {
    MonsterId:50,
    RankId:2,
    name: "Spongy Hide+",
    targetReward: 27,
    captureReward: 27,
    brokenPartReward: 60,
    carve: 31,
    droppedMaterial:50
  },
  {
    MonsterId:50,
    RankId:2,
    name: "Royal Ludroth Crest+",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:50,
    RankId:2,
    name: "Royal Ludroth Tail",
    targetReward: 5,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:50,
    RankId:2,
    name: "Torrent Sac",
    targetReward: 14,
    captureReward: 16,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:50,
    RankId:2,
    name: "Dash Extract",
    targetReward: 9,
    captureReward: 24,
    brokenPartReward: 20,
    carve: 12,
    droppedMaterial:34
  },
  {
    MonsterId:50,
    RankId:2,
    name: "Wyvern Gem",
    targetReward: 1,
    captureReward: 3,
    brokenPartReward: 0,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:50,
    RankId:3,
    name: "Royal Ludroth Shard",
    targetReward: 12,
    captureReward: 18,
    brokenPartReward: 20,
    carve: 33,
    droppedMaterial:0
  },
  {
    MonsterId:50,
    RankId:3,
    name: "Royal Ludroth Talon",
    targetReward: 22,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 24,
    droppedMaterial:15
  },
  {
    MonsterId:50,
    RankId:3,
    name: "Spongy Piel",
    targetReward: 27,
    captureReward: 27,
    brokenPartReward: 60,
    carve: 31,
    droppedMaterial:50
  },
  {
    MonsterId:50,
    RankId:3,
    name: "Chic Crest",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:50,
    RankId:3,
    name: "Royal Ludroth Lash",
    targetReward: 5,
    captureReward: 0,
    brokenPartReward: 12,
    carve: 70,
    droppedMaterial:0
  },
  {
    MonsterId:50,
    RankId:3,
    name: "Flood Sac",
    targetReward: 14,
    captureReward: 16,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:50,
    RankId:3,
    name: "Dash Extract",
    targetReward: 9,
    captureReward: 24,
    brokenPartReward: 20,
    carve: 12,
    droppedMaterial:34
  },
  {
    MonsterId:50,
    RankId:3,
    name: "Large Wyvern Gem",
    targetReward: 1,
    captureReward: 3,
    brokenPartReward: 0,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:50,
    RankId:3,
    name: "Afflicted Monster Bone",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:51,
    RankId:3,
    name: "Begrudged Rancorscale",
    targetReward: 18,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 34,
    droppedMaterial:20
  },
  {
    MonsterId:51,
    RankId:3,
    name: "Magna Armored Cortex",
    targetReward: 28,
    captureReward: 37,
    brokenPartReward: 0,
    carve: 22,
    droppedMaterial:30
  },
  {
    MonsterId:51,
    RankId:3,
    name: "Surging Armblade",
    targetReward: 21,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 16,
    droppedMaterial:0
  },
  {
    MonsterId:51,
    RankId:3,
    name: "Moaning Bladeshell",
    targetReward: 8,
    captureReward: 20,
    brokenPartReward: 90,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:51,
    RankId:3,
    name: "Magnamalo Tail+",
    targetReward: 6,
    captureReward: 14,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:51,
    RankId:3,
    name: "Magna Barrierprism",
    targetReward: 16,
    captureReward: 0,
    brokenPartReward: 10,
    carve: 26,
    droppedMaterial:30
  },
  {
    MonsterId:51,
    RankId:3,
    name: "Magna Glare Eye",
    targetReward: 3,
    captureReward: 3,
    brokenPartReward: 5,
    carve: 2,
    droppedMaterial:0
  },
  {
    MonsterId:51,
    RankId:3,
    name: "Horn of Malice",
    targetReward: 0,
    captureReward: 26,
    brokenPartReward: 95,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:52,
    RankId:3,
    name: "Seregios Slavescale+",
    targetReward: 21,
    captureReward: 23,
    brokenPartReward: 17,
    carve: 32,
    droppedMaterial:16
  },
  {
    MonsterId:52,
    RankId:3,
    name: "Seregios Airblade+",
    targetReward: 35,
    captureReward: 33,
    brokenPartReward: 10,
    carve: 24,
    droppedMaterial:33
  },
  {
    MonsterId:52,
    RankId:3,
    name: "Seregios Carver+",
    targetReward: 18,
    captureReward: 10,
    brokenPartReward: 70,
    carve: 21,
    droppedMaterial:15
  },
  {
    MonsterId:52,
    RankId:3,
    name: "Seregios Scraper+",
    targetReward: 15,
    captureReward: 21,
    brokenPartReward: 70,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:52,
    RankId:3,
    name: "Seregios Impaler+",
    targetReward: 8,
    captureReward: 10,
    brokenPartReward: 0,
    carve: 75,
    droppedMaterial:0
  },
  {
    MonsterId:52,
    RankId:3,
    name: "Seregios Lens",
    targetReward: 3,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:52,
    RankId:3,
    name: "Seregios Breacher+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:53,
    RankId:3,
    name: "S. Magala Cortex",
    targetReward: 23,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 30,
    droppedMaterial:15
  },
  {
    MonsterId:53,
    RankId:3,
    name: "S. Magala Shard",
    targetReward: 33,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 39,
    droppedMaterial:34
  },
  {
    MonsterId:53,
    RankId:3,
    name: "S. Magala Purifier",
    targetReward: 19,
    captureReward: 0,
    brokenPartReward: 60,
    carve: 17,
    droppedMaterial:15
  },
  {
    MonsterId:53,
    RankId:3,
    name: "S. Magala Lash",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:53,
    RankId:3,
    name: "S. Magala Hardhorn",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 97,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:53,
    RankId:3,
    name: "S. Magala Mantle",
    targetReward: 3,
    captureReward: 0,
    brokenPartReward: 3,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:53,
    RankId:3,
    name: "S. Magala Lightwing",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:54,
    RankId:3,
    name: "Ceanataur Cortex",
    targetReward: 24,
    captureReward: 27,
    brokenPartReward: 10,
    carve: 41,
    droppedMaterial:80
  },
  {
    MonsterId:54,
    RankId:3,
    name: "Heavy Ceanataur Leg",
    targetReward: 32,
    captureReward: 36,
    brokenPartReward: 0,
    carve: 32,
    droppedMaterial:0
  },
  {
    MonsterId:54,
    RankId:3,
    name: "Ceanataur Hardclaw",
    targetReward: 22,
    captureReward: 12,
    brokenPartReward: 70,
    carve: 17,
    droppedMaterial:0
  },
  {
    MonsterId:54,
    RankId:3,
    name: "Monster Slogbone",
    targetReward: 12,
    captureReward: 10,
    brokenPartReward: 20,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:54,
    RankId:3,
    name: "Fine Black Pearl",
    targetReward: 10,
    captureReward: 15,
    brokenPartReward: 0,
    carve: 10,
    droppedMaterial:25
  },
  {
    MonsterId:54,
    RankId:3,
    name: "Heavy Wyvern Scalp",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:54,
    RankId:3,
    name: "Solid Bone",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 30,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:54,
    RankId:3,
    name: "Crab Pearl+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:75
  },
  {
    MonsterId:54,
    RankId:3,
    name: "Afflicted Shell",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:55,
    RankId:1,
    name: "Somnacanth Scale",
    targetReward: 21,
    captureReward: 17,
    brokenPartReward: 20,
    carve: 43,
    droppedMaterial:50
  },
  {
    MonsterId:55,
    RankId:1,
    name: "Somnacanth Shell",
    targetReward: 34,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 33,
    droppedMaterial:0
  },
  {
    MonsterId:55,
    RankId:1,
    name: "Somnacanth Fin",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:55,
    RankId:1,
    name: "Somnacanth Dust",
    targetReward: 23,
    captureReward: 30,
    brokenPartReward: 20,
    carve: 15,
    droppedMaterial:40
  },
  {
    MonsterId:55,
    RankId:1,
    name: "Monster Bone L",
    targetReward: 8,
    captureReward: 14,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:55,
    RankId:1,
    name: "Somnacanth Talon",
    targetReward: 0,
    captureReward: 27,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:55,
    RankId:2,
    name: "Somnacanth Scale+",
    targetReward: 21,
    captureReward: 16,
    brokenPartReward: 20,
    carve: 43,
    droppedMaterial:50
  },
  {
    MonsterId:55,
    RankId:2,
    name: "Somnacanth Shell+",
    targetReward: 33,
    captureReward: 29,
    brokenPartReward: 0,
    carve: 32,
    droppedMaterial:0
  },
  {
    MonsterId:55,
    RankId:2,
    name: "Somnacanth Fin+",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:55,
    RankId:2,
    name: "Somnacanth Sedative",
    targetReward: 23,
    captureReward: 12,
    brokenPartReward: 17,
    carve: 14,
    droppedMaterial:39
  },
  {
    MonsterId:55,
    RankId:2,
    name: "Monster Hardbone",
    targetReward: 7,
    captureReward: 14,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:55,
    RankId:2,
    name: "Wyvern Gem",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:55,
    RankId:2,
    name: "Somnacanth Talon+",
    targetReward: 0,
    captureReward: 26,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:55,
    RankId:3,
    name: "Somnacanth Shard",
    targetReward: 21,
    captureReward: 16,
    brokenPartReward: 20,
    carve: 43,
    droppedMaterial:50
  },
  {
    MonsterId:55,
    RankId:3,
    name: "Somnacanth Cortex",
    targetReward: 33,
    captureReward: 29,
    brokenPartReward: 0,
    carve: 32,
    droppedMaterial:0
  },
  {
    MonsterId:55,
    RankId:3,
    name: "Somnacanth Wildfin",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:55,
    RankId:3,
    name: "Somna Dream Powder",
    targetReward: 23,
    captureReward: 12,
    brokenPartReward: 17,
    carve: 14,
    droppedMaterial:39
  },
  {
    MonsterId:55,
    RankId:3,
    name: "Monster Toughbone",
    targetReward: 7,
    captureReward: 14,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:55,
    RankId:3,
    name: "Large Wyvern Gem",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:55,
    RankId:3,
    name: "Somnacanth Dreamtalon",
    targetReward: 0,
    captureReward: 26,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:55,
    RankId:3,
    name: "Afflicted Shell",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:56,
    RankId:2,
    name: "Teostra Carapace",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 27,
    droppedMaterial:15
  },
  {
    MonsterId:56,
    RankId:2,
    name: "Fire Dragon Scale+",
    targetReward: 26,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 21,
    droppedMaterial:25
  },
  {
    MonsterId:56,
    RankId:2,
    name: "Teostra Mane",
    targetReward: 19,
    captureReward: 0,
    brokenPartReward: 25,
    carve: 18,
    droppedMaterial:0
  },
  {
    MonsterId:56,
    RankId:2,
    name: "Teostra Claw+",
    targetReward: 16,
    captureReward: 0,
    brokenPartReward: 18,
    carve: 14,
    droppedMaterial:0
  },
  {
    MonsterId:56,
    RankId:2,
    name: "Teostra Powder",
    targetReward: 10,
    captureReward: 0,
    brokenPartReward: 12,
    carve: 0,
    droppedMaterial:34
  },
  {
    MonsterId:56,
    RankId:2,
    name: "Teostra Tail",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:56,
    RankId:2,
    name: "Teostra Gem",
    targetReward: 3,
    captureReward: 0,
    brokenPartReward: 3,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:56,
    RankId:2,
    name: "Teostra Horn+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 72,
    carve: 8,
    droppedMaterial:0
  },
  {
    MonsterId:56,
    RankId:2,
    name: "Teostra Webbing",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:56,
    RankId:2,
    name: "Elder Dragon Blood",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:56,
    RankId:3,
    name: "Teostra Cortex",
    targetReward: 17,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 30,
    droppedMaterial:34
  },
  {
    MonsterId:56,
    RankId:3,
    name: "Hellfire Shard",
    targetReward: 31,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 24,
    droppedMaterial:30
  },
  {
    MonsterId:56,
    RankId:3,
    name: "Teostra Mane",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 12,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:56,
    RankId:3,
    name: "Fire Dragon Hardclaw",
    targetReward: 20,
    captureReward: 0,
    brokenPartReward: 18,
    carve: 14,
    droppedMaterial:0
  },
  {
    MonsterId:56,
    RankId:3,
    name: "Teostra Lash",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:56,
    RankId:3,
    name: "Teostra Gem",
    targetReward: 5,
    captureReward: 0,
    brokenPartReward: 5,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:56,
    RankId:3,
    name: "Large Elder Dragon Gem",
    targetReward: 3,
    captureReward: 0,
    brokenPartReward: 3,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:56,
    RankId:3,
    name: "Teostra Hardhorn",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 8,
    droppedMaterial:0
  },
  {
    MonsterId:56,
    RankId:3,
    name: "Teostra Fellwing",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 10,
    droppedMaterial:0
  },
  {
    MonsterId:56,
    RankId:3,
    name: "Teostra Powder",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 12,
    carve: 0,
    droppedMaterial:15
  },
  {
    MonsterId:56,
    RankId:3,
    name: "Pure Dragon Blood",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:10
  },
  {
    MonsterId:57,
    RankId:1,
    name: "Tetranadon Hide",
    targetReward: 24,
    captureReward: 21,
    brokenPartReward: 30,
    carve: 44,
    droppedMaterial:20
  },
  {
    MonsterId:57,
    RankId:1,
    name: "Tetra Carapace",
    targetReward: 32,
    captureReward: 33,
    brokenPartReward: 100,
    carve: 32,
    droppedMaterial:30
  },
  {
    MonsterId:57,
    RankId:1,
    name: "Tetranadon Beak",
    targetReward: 8,
    captureReward: 12,
    brokenPartReward: 70,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:57,
    RankId:1,
    name: "Aqua Sac",
    targetReward: 24,
    captureReward: 29,
    brokenPartReward: 70,
    carve: 19,
    droppedMaterial:0
  },
  {
    MonsterId:57,
    RankId:1,
    name: "Jumbo Bone",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:57,
    RankId:1,
    name: "Tetranadon Disc",
    targetReward: 0,
    captureReward: 5,
    brokenPartReward: 100,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:57,
    RankId:1,
    name: "Shiny Nacre",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:50
  },
  {
    MonsterId:57,
    RankId:2,
    name: "Tetranadon Hide+",
    targetReward: 24,
    captureReward: 21,
    brokenPartReward: 30,
    carve: 44,
    droppedMaterial:20
  },
  {
    MonsterId:57,
    RankId:2,
    name: "Tetra Carapace+",
    targetReward: 32,
    captureReward: 33,
    brokenPartReward: 100,
    carve: 32,
    droppedMaterial:30
  },
  {
    MonsterId:57,
    RankId:2,
    name: "Tetranadon Beak+",
    targetReward: 8,
    captureReward: 12,
    brokenPartReward: 70,
    carve: 19,
    droppedMaterial:0
  },
  {
    MonsterId:57,
    RankId:2,
    name: "Torrent Sac",
    targetReward: 24,
    captureReward: 29,
    brokenPartReward: 70,
    carve: 19,
    droppedMaterial:30
  },
  {
    MonsterId:57,
    RankId:2,
    name: "Stoutbone",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:57,
    RankId:2,
    name: "Tetranadon Disc+",
    targetReward: 0,
    captureReward: 5,
    brokenPartReward: 100,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:57,
    RankId:2,
    name: "Shiny Nacre",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:20
  },
  {
    MonsterId:57,
    RankId:3,
    name: "Tetranadon Thickhide",
    targetReward: 24,
    captureReward: 21,
    brokenPartReward: 30,
    carve: 44,
    droppedMaterial:20
  },
  {
    MonsterId:57,
    RankId:3,
    name: "Heavy Tetra Carapace",
    targetReward: 32,
    captureReward: 33,
    brokenPartReward: 100,
    carve: 32,
    droppedMaterial:30
  },
  {
    MonsterId:57,
    RankId:3,
    name: "Tetranadon Greatbeak",
    targetReward: 8,
    captureReward: 12,
    brokenPartReward: 70,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:57,
    RankId:3,
    name: "Flood Sac",
    targetReward: 24,
    captureReward: 29,
    brokenPartReward: 70,
    carve: 19,
    droppedMaterial:0
  },
  {
    MonsterId:57,
    RankId:3,
    name: "Massive Bone",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:57,
    RankId:3,
    name: "Tetranadon Finedisc",
    targetReward: 0,
    captureReward: 5,
    brokenPartReward: 100,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:57,
    RankId:3,
    name: "Glittering Nacre",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:20
  },
  {
    MonsterId:57,
    RankId:3,
    name: "Shimmering Nacre",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:30
  },
  {
    MonsterId:57,
    RankId:3,
    name: "Afflicted Blood",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:58,
    RankId:2,
    name: "Narwa Carapace",
    targetReward: 22,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 37,
    droppedMaterial:0
  },
  {
    MonsterId:58,
    RankId:2,
    name: "Narwa Hide+",
    targetReward: 32,
    captureReward: 0,
    brokenPartReward: 17,
    carve: 29,
    droppedMaterial:0
  },
  {
    MonsterId:58,
    RankId:2,
    name: "Narwa Horn+",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:58,
    RankId:2,
    name: "Narwa Sparksac",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 60,
    carve: 80,
    droppedMaterial:30
  },
  {
    MonsterId:58,
    RankId:2,
    name: "Narwa Tentacle",
    targetReward: 18,
    captureReward: 0,
    brokenPartReward: 40,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:58,
    RankId:2,
    name: "Thunder Serpent Orb",
    targetReward: 2,
    captureReward: 0,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:58,
    RankId:2,
    name: "Narwa Claw+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 21,
    droppedMaterial:20
  },
  {
    MonsterId:59,
    RankId:1,
    name: "Tigrex Shell",
    targetReward: 15,
    captureReward: 37,
    brokenPartReward: 28,
    carve: 20,
    droppedMaterial:30
  },
  {
    MonsterId:59,
    RankId:1,
    name: "Tigrex Scale",
    targetReward: 33,
    captureReward: 18,
    brokenPartReward: 20,
    carve: 45,
    droppedMaterial:40
  },
  {
    MonsterId:59,
    RankId:1,
    name: "Tigrex Claw",
    targetReward: 21,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 32,
    droppedMaterial:10
  },
  {
    MonsterId:59,
    RankId:1,
    name: "Tigrex Fang",
    targetReward: 17,
    captureReward: 28,
    brokenPartReward: 60,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:59,
    RankId:1,
    name: "Tigrex Tail",
    targetReward: 9,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:59,
    RankId:1,
    name: "Tigrex Scalp",
    targetReward: 5,
    captureReward: 5,
    brokenPartReward: 12,
    carve: 3,
    droppedMaterial:0
  },
  {
    MonsterId:59,
    RankId:2,
    name: "Tigrex Carapace",
    targetReward: 15,
    captureReward: 34,
    brokenPartReward: 17,
    carve: 18,
    droppedMaterial:30
  },
  {
    MonsterId:59,
    RankId:2,
    name: "Tigres Scale+",
    targetReward: 32,
    captureReward: 16,
    brokenPartReward: 20,
    carve: 42,
    droppedMaterial:39
  },
  {
    MonsterId:59,
    RankId:2,
    name: "Tigrex Claw+",
    targetReward: 21,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 30,
    droppedMaterial:10
  },
  {
    MonsterId:59,
    RankId:2,
    name: "Tigrex Fang+",
    targetReward: 17,
    captureReward: 27,
    brokenPartReward: 60,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:59,
    RankId:2,
    name: "Tigrex Scalp",
    targetReward: 8,
    captureReward: 8,
    brokenPartReward: 15,
    carve: 7,
    droppedMaterial:0
  },
  {
    MonsterId:59,
    RankId:2,
    name: "Tigrex Maw",
    targetReward: 4,
    captureReward: 5,
    brokenPartReward: 8,
    carve: 3,
    droppedMaterial:0
  },
  {
    MonsterId:59,
    RankId:2,
    name: "Wyvern Gem",
    targetReward: 3,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 5,
    droppedMaterial:1
  },
  {
    MonsterId:59,
    RankId:2,
    name: "Tigrex Tail",
    targetReward: 0,
    captureReward: 10,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:59,
    RankId:3,
    name: "Tigrex Cortex",
    targetReward: 15,
    captureReward: 35,
    brokenPartReward: 27,
    carve: 19,
    droppedMaterial:30
  },
  {
    MonsterId:59,
    RankId:3,
    name: "Tigrex Shard",
    targetReward: 32,
    captureReward: 17,
    brokenPartReward: 20,
    carve: 42,
    droppedMaterial:39
  },
  {
    MonsterId:59,
    RankId:3,
    name: "Tigrex Hardclaw",
    targetReward: 21,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 30,
    droppedMaterial:10
  },
  {
    MonsterId:59,
    RankId:3,
    name: "Tigrex Hardfang",
    targetReward: 17,
    captureReward: 27,
    brokenPartReward: 60,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:59,
    RankId:3,
    name: "Tigrex Lash",
    targetReward: 7,
    captureReward: 10,
    brokenPartReward: 15,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:59,
    RankId:3,
    name: "Large Wyvern Gem",
    targetReward: 5,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:1
  },
  {
    MonsterId:59,
    RankId:3,
    name: "Tigrex Mantle",
    targetReward: 3,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 2,
    droppedMaterial:1
  },
  {
    MonsterId:59,
    RankId:3,
    name: "Tigrex Maw",
    targetReward: 0,
    captureReward: 8,
    brokenPartReward: 10,
    carve: 7,
    droppedMaterial:0
  },
  {
    MonsterId:60,
    RankId:1,
    name: "Tobi-Kadachi Pelt",
    targetReward: 13,
    captureReward: 12,
    brokenPartReward: 70,
    carve: 27,
    droppedMaterial:35
  },
  {
    MonsterId:60,
    RankId:1,
    name: "Tobi-Kadachi Scale",
    targetReward: 29,
    captureReward: 19,
    brokenPartReward: 30,
    carve: 38,
    droppedMaterial:40
  },
  {
    MonsterId:60,
    RankId:1,
    name: "Tobi-Kadachi Membrane",
    targetReward: 23,
    captureReward: 22,
    brokenPartReward: 0,
    carve: 23,
    droppedMaterial:0
  },
  {
    MonsterId:60,
    RankId:1,
    name: "Tobi-Kadachi Claw",
    targetReward: 15,
    captureReward: 33,
    brokenPartReward: 80,
    carve: 12,
    droppedMaterial:10
  },
  {
    MonsterId:60,
    RankId:1,
    name: "Tobi-Kadachi Electrode",
    targetReward: 8,
    captureReward: 14,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:60,
    RankId:1,
    name: "Electro Sac",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:60,
    RankId:2,
    name: "Tobi-Kadachi Pelt+",
    targetReward: 17,
    captureReward: 14,
    brokenPartReward: 70,
    carve: 31,
    droppedMaterial:35
  },
  {
    MonsterId:60,
    RankId:2,
    name: "Tobi-Kadachi Scale+",
    targetReward: 34,
    captureReward: 22,
    brokenPartReward: 17,
    carve: 43,
    droppedMaterial:39
  },
  {
    MonsterId:60,
    RankId:2,
    name: "Tobi-Kadachi Claw+",
    targetReward: 24,
    captureReward: 34,
    brokenPartReward: 80,
    carve: 13,
    droppedMaterial:10
  },
  {
    MonsterId:60,
    RankId:2,
    name: "Tobi-Kadachi Electrode+",
    targetReward: 9,
    captureReward: 14,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:60,
    RankId:2,
    name: "Thunder Sac",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:60,
    RankId:2,
    name: "Wyvern Gem",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:60,
    RankId:2,
    name: "Tobi-Kadachi Membrane",
    targetReward: 0,
    captureReward: 13,
    brokenPartReward: 0,
    carve: 12,
    droppedMaterial:0
  },
  {
    MonsterId:60,
    RankId:3,
    name: "Tobi-Kadachi Thickfur",
    targetReward: 17,
    captureReward: 14,
    brokenPartReward: 70,
    carve: 27,
    droppedMaterial:35
  },
  {
    MonsterId:60,
    RankId:3,
    name: "Tobi-Kadachi Shard",
    targetReward: 34,
    captureReward: 18,
    brokenPartReward: 17,
    carve: 36,
    droppedMaterial:39
  },
  {
    MonsterId:60,
    RankId:3,
    name: "Tobi-Kadachi Hardclaw",
    targetReward: 24,
    captureReward: 29,
    brokenPartReward: 80,
    carve: 13,
    droppedMaterial:10
  },
  {
    MonsterId:60,
    RankId:3,
    name: "Tobi-Kadachi Cathode",
    targetReward: 9,
    captureReward: 14,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:60,
    RankId:3,
    name: "Lightning Sac",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:60,
    RankId:3,
    name: "Large Wyvern Gem",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:60,
    RankId:3,
    name: "Tobi-Kadachi Membrane+",
    targetReward: 0,
    captureReward: 22,
    brokenPartReward: 0,
    carve: 23,
    droppedMaterial:0
  },
  {
    MonsterId:60,
    RankId:3,
    name: "Afflicted Scale",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:61,
    RankId:1,
    name: "Volvidon Shell",
    targetReward: 15,
    captureReward: 26,
    brokenPartReward: 30,
    carve: 40,
    droppedMaterial:35
  },
  {
    MonsterId:61,
    RankId:1,
    name: "Volvidon Claw",
    targetReward: 19,
    captureReward: 34,
    brokenPartReward: 0,
    carve: 19,
    droppedMaterial:15
  },
  {
    MonsterId:61,
    RankId:1,
    name: "Volvi Rickrack",
    targetReward: 22,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 24,
    droppedMaterial:0
  },
  {
    MonsterId:61,
    RankId:1,
    name: "Paralysis Sac",
    targetReward: 16,
    captureReward: 22,
    brokenPartReward: 0,
    carve: 17,
    droppedMaterial:0
  },
  {
    MonsterId:61,
    RankId:1,
    name: "Jumbo Bone",
    targetReward: 13,
    captureReward: 18,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:61,
    RankId:1,
    name: "Monster Fluid",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:25
  },
  {
    MonsterId:61,
    RankId:2,
    name: "Volvi Carapace",
    targetReward: 14,
    captureReward: 21,
    brokenPartReward: 35,
    carve: 41,
    droppedMaterial:34
  },
  {
    MonsterId:61,
    RankId:2,
    name: "Volvidon Claw+",
    targetReward: 21,
    captureReward: 32,
    brokenPartReward: 0,
    carve: 22,
    droppedMaterial:15
  },
  {
    MonsterId:61,
    RankId:2,
    name: "Volvi Rickrack",
    targetReward: 9,
    captureReward: 0,
    brokenPartReward: 65,
    carve: 11,
    droppedMaterial:0
  },
  {
    MonsterId:61,
    RankId:2,
    name: "Omniplegia Sac",
    targetReward: 20,
    captureReward: 22,
    brokenPartReward: 0,
    carve: 21,
    droppedMaterial:0
  },
  {
    MonsterId:61,
    RankId:2,
    name: "Stoutbone",
    targetReward: 11,
    captureReward: 16,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:61,
    RankId:2,
    name: "Monster Broth",
    targetReward: 18,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:25
  },
  {
    MonsterId:61,
    RankId:2,
    name: "Beast Gem",
    targetReward: 7,
    captureReward: 9,
    brokenPartReward: 0,
    carve: 5,
    droppedMaterial:1
  },
  {
    MonsterId:61,
    RankId:3,
    name: "Volvidon Cortex",
    targetReward: 14,
    captureReward: 21,
    brokenPartReward: 30,
    carve: 35,
    droppedMaterial:34
  },
  {
    MonsterId:61,
    RankId:3,
    name: "Volvidon Talon",
    targetReward: 19,
    captureReward: 34,
    brokenPartReward: 0,
    carve: 18,
    droppedMaterial:15
  },
  {
    MonsterId:61,
    RankId:3,
    name: "Large Volvi Rickrack",
    targetReward: 23,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 22,
    droppedMaterial:0
  },
  {
    MonsterId:61,
    RankId:3,
    name: "Ultraplegia Sac",
    targetReward: 16,
    captureReward: 24,
    brokenPartReward: 0,
    carve: 17,
    droppedMaterial:0
  },
  {
    MonsterId:61,
    RankId:3,
    name: "Massive Bone",
    targetReward: 10,
    captureReward: 16,
    brokenPartReward: 0,
    carve: 17,
    droppedMaterial:0
  },
  {
    MonsterId:61,
    RankId:3,
    name: "Monster Essence",
    targetReward: 15,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:25
  },
  {
    MonsterId:61,
    RankId:3,
    name: "Large Beast Gem",
    targetReward: 3,
    captureReward: 5,
    brokenPartReward: 0,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:61,
    RankId:3,
    name: "Beast Gem",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 5,
    droppedMaterial:0
  },
  {
    MonsterId:61,
    RankId:3,
    name: "Afflicted Bone",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 20,
    carve: 20,
    droppedMaterial:0
  },
  {
    MonsterId:62,
    RankId:2,
    name: "Ibushi Carapace",
    targetReward: 22,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 37,
    droppedMaterial:50
  },
  {
    MonsterId:62,
    RankId:2,
    name: "Ibushi Hide+",
    targetReward: 32,
    captureReward: 0,
    brokenPartReward: 17,
    carve: 29,
    droppedMaterial:50
  },
  {
    MonsterId:62,
    RankId:2,
    name: "Ibushi Horn+",
    targetReward: 32,
    captureReward: 0,
    brokenPartReward: 17,
    carve: 29,
    droppedMaterial:35
  },
  {
    MonsterId:62,
    RankId:2,
    name: "Ibushi Windsac",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 60,
    carve: 80,
    droppedMaterial:30
  },
  {
    MonsterId:62,
    RankId:2,
    name: "Ibushi Bluespike",
    targetReward: 18,
    captureReward: 0,
    brokenPartReward: 40,
    carve: 12,
    droppedMaterial:20
  },
  {
    MonsterId:62,
    RankId:2,
    name: "Wind Serpent Orb",
    targetReward: 2,
    captureReward: 0,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:62,
    RankId:2,
    name: "Ibushi Claw+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 21,
    droppedMaterial:20
  },
  {
    MonsterId:62,
    RankId:3,
    name: "Ibushi Cortex",
    targetReward: 20,
    captureReward: 0,
    brokenPartReward: 37,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:62,
    RankId:3,
    name: "Ibushi Finehide",
    targetReward: 31,
    captureReward: 0,
    brokenPartReward: 17,
    carve: 29,
    droppedMaterial:0
  },
  {
    MonsterId:62,
    RankId:3,
    name: "Ibushi Hardhorn",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:62,
    RankId:3,
    name: "Ibushi Windsac+",
    targetReward: 14,
    captureReward: 0,
    brokenPartReward: 60,
    carve: 80,
    droppedMaterial:30
  },
  {
    MonsterId:62,
    RankId:3,
    name: "Ibushi Bluespike+",
    targetReward: 17,
    captureReward: 0,
    brokenPartReward: 50,
    carve: 12,
    droppedMaterial:20
  },
  {
    MonsterId:62,
    RankId:3,
    name: "Wind Serpent Orb",
    targetReward: 4,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:3
  },
  {
    MonsterId:62,
    RankId:3,
    name: "Wind Dragonsphire",
    targetReward: 2,
    captureReward: 0,
    brokenPartReward: 3,
    carve: 3,
    droppedMaterial:1
  },
  {
    MonsterId:62,
    RankId:3,
    name: "Ibushi Hardclaw",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 80,
    carve: 21,
    droppedMaterial:20
  },
  {
    MonsterId:63,
    RankId:1,
    name: "Zinogre Shell",
    targetReward: 21,
    captureReward: 15,
    brokenPartReward: 0,
    carve: 34,
    droppedMaterial:29
  },
  {
    MonsterId:63,
    RankId:1,
    name: "Zinogre Shocksfur",
    targetReward: 31,
    captureReward: 29,
    brokenPartReward: 30,
    carve: 25,
    droppedMaterial:40
  },
  {
    MonsterId:63,
    RankId:1,
    name: "Zinogre Shocker",
    targetReward: 21,
    captureReward: 25,
    brokenPartReward: 70,
    carve: 18,
    droppedMaterial:0
  },
  {
    MonsterId:63,
    RankId:1,
    name: "Zinogre Tail",
    targetReward: 8,
    captureReward: 12,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:63,
    RankId:1,
    name: "Fulgurbug",
    targetReward: 17,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:20
  },
  {
    MonsterId:63,
    RankId:1,
    name: "Zinogre Plate",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:63,
    RankId:1,
    name: "Zinogre Horn",
    targetReward: 0,
    captureReward: 16,
    brokenPartReward: 97,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:63,
    RankId:1,
    name: "Zinogre Claw",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 22,
    droppedMaterial:10
  },
  {
    MonsterId:63,
    RankId:2,
    name: "Zinogre Carapace",
    targetReward: 21,
    captureReward: 15,
    brokenPartReward: 0,
    carve: 33,
    droppedMaterial:31
  },
  {
    MonsterId:63,
    RankId:2,
    name: "Zinogre Electrofur",
    targetReward: 33,
    captureReward: 29,
    brokenPartReward: 30,
    carve: 24,
    droppedMaterial:40
  },
  {
    MonsterId:63,
    RankId:2,
    name: "Zinogre Shocker+",
    targetReward: 23,
    captureReward: 25,
    brokenPartReward: 70,
    carve: 17,
    droppedMaterial:0
  },
  {
    MonsterId:63,
    RankId:2,
    name: "Zinogre Tail",
    targetReward: 4,
    captureReward: 7,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:63,
    RankId:2,
    name: "Fulgurbug",
    targetReward: 12,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:15
  },
  {
    MonsterId:63,
    RankId:2,
    name: "Zinogre Plate",
    targetReward: 5,
    captureReward: 5,
    brokenPartReward: 7,
    carve: 3,
    droppedMaterial:3
  },
  {
    MonsterId:63,
    RankId:2,
    name: "Zinogre Jasper",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:63,
    RankId:2,
    name: "Zinogre Horn+",
    targetReward: 0,
    captureReward: 16,
    brokenPartReward: 90,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:63,
    RankId:2,
    name: "Zinogre Claw+",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 22,
    droppedMaterial:10
  },
  {
    MonsterId:63,
    RankId:3,
    name: "Zinogre Cortex",
    targetReward: 21,
    captureReward: 15,
    brokenPartReward: 0,
    carve: 33,
    droppedMaterial:31
  },
  {
    MonsterId:63,
    RankId:3,
    name: "Zinogre Electrofur+",
    targetReward: 33,
    captureReward: 29,
    brokenPartReward: 30,
    carve: 24,
    droppedMaterial:40
  },
  {
    MonsterId:63,
    RankId:3,
    name: "Zinogre Deathly Shocker",
    targetReward: 23,
    captureReward: 25,
    brokenPartReward: 70,
    carve: 17,
    droppedMaterial:0
  },
  {
    MonsterId:63,
    RankId:3,
    name: "Zinogre Lash",
    targetReward: 8,
    captureReward: 7,
    brokenPartReward: 0,
    carve: 80,
    droppedMaterial:0
  },
  {
    MonsterId:63,
    RankId:3,
    name: "Fulgurbug",
    targetReward: 8,
    captureReward: 0,
    brokenPartReward: 0,
    carve: 0,
    droppedMaterial:15
  },
  {
    MonsterId:63,
    RankId:3,
    name: "Zinogre Jasper",
    targetReward: 5,
    captureReward: 5,
    brokenPartReward: 5,
    carve: 1,
    droppedMaterial:3
  },
  {
    MonsterId:63,
    RankId:3,
    name: "Zinogre Skymerald",
    targetReward: 2,
    captureReward: 3,
    brokenPartReward: 3,
    carve: 1,
    droppedMaterial:1
  },
  {
    MonsterId:63,
    RankId:3,
    name: "Zinogre Hardhorn",
    targetReward: 0,
    captureReward: 16,
    brokenPartReward: 92,
    carve: 0,
    droppedMaterial:0
  },
  {
    MonsterId:63,
    RankId:3,
    name: "Zinogre Hardclaw",
    targetReward: 0,
    captureReward: 0,
    brokenPartReward: 70,
    carve: 22,
    droppedMaterial:10
  },
];

const seedParts = () => Part.bulkCreate(partData)
module.exports = seedParts