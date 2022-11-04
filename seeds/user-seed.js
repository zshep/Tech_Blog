const { User } = require('../model');

const userData = [
  {
    id: 1,
    user_name: 'z_man22',
    user_password: 'shoes123',
    email: 'z@yahoo.com',
  },
  {
    id: 2,
    user_name: 'j_man23',
    user_password: 'shoes123',
    email: 'j@yahoo.com',
  },
  {
    id: 3,
    user_name: 't_man24',
    user_password: 'shoes123',
    email: 't@yahoo.com',
  },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;