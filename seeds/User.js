const { User } = require('../models');

const userData = [
    {
        "first_name": "Bob",
        "last_name": "Belcher",
        "email": "bobsburgers@thewarf.com",
        "password": "Password123!"
    },
    {
        "first_name": "Hank",
        "last_name": "Hill",
        "email": "hankhill@stricklandpropane.com",
        "password": "Password123!"
    },
    {
        "first_name": "Steve",
        "last_name": "Smith",
        "email": "stevesmith@CIA.com",
        "password": "Password123!"
 
    }
]

const seedUser = () => User.bulkCreate(userData,{
    individualHookds: true,
    returning: true

})

module.exports = seedUser;