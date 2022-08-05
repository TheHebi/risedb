const { Monster } = require("../models");

const monsterData = [
  {
    name: "Anoksom",
    description:
      "When this huge Bird Wyvern stands on one leg, its peculiar collar gives it the appearance of a monstrous parasol. It is fiercely territorial, and whenever it finds intruders, it spreads its wings and unfolds the eye-like crest on its head to terrifying effect.",
    img:"https://static.wikia.nocookie.net/monsterhunter/images/2/23/MHRise-Aknosom_Render_001.png/revision/latest?cb=20200917143656"
  },
];

const seedMonsters = () => Monster.bulkCreate(monsterData)
module.exports = seedMonsters
