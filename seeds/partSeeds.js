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