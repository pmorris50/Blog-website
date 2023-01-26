const sequelize = require('../config/connection');
const seedUser = require('./User');
const seedBlog = require('./Blog');
const seedComment = require('./Comment');

const seedDatabase = async () =>{
    await sequelize.sync({force: true});
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUser();
    console.log('\n----- USERS SEEDED -----\n');
    await seedBlog();
    console.log('\n----- BlOGS SEEDED -----\n');
    await seedComment();
    console.log('\n---------COMMENTS SEEDED-------\n');

    process.exit(0);
};

seedDatabase();