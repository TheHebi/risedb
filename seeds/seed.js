const seedMonsters = require('./monsterSeeds')
const seedParts = require('./partSeeds')
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({force:true}),
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedMonsters();
    console.log('\n----- MONSTERS SEEDED -----\n');

    await seedParts();
    console.log('\n----- PARTS SEEDED -----\n');

    process.exit(0);
};

seedAll();