const { User } = require('../model');

const userData = [
  {
    user_name: 'z_man22',
    user_password: 'shoes123'
  },
  {
    user_name: 'j_man23',
    user_password: 'shoes123'
  },
  {
    user_name: 't_man24',
    user_password: 'shoes123'
  },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;