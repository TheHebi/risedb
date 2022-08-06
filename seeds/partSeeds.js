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