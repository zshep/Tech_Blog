const { Post } = require('../model');

const postData = [
  {
    post_title: 'Never gonna',
    post_date: '2022-10-01',
    post_content: 'give you up',
    user_id: 1
  },
  {
    post_title: 'Ill never gonna',
    post_date: '2022-10-02',
    post_content: 'let you down',
    user_id: 2,
  },
  {
    post_title: 'et tu brutes',
    post_date: '2022-10-03',
    post_content: 'bummer bro',
    user_id: 3
  },

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;