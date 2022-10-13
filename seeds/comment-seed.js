const { Comment } = require('../model');

const commentData = [
  {
    comment_text: 'I like cheese',
    comment_date: '2022-10-01'
  },
  {
    comment_text: 'I like shoes',
    comment_date: '2022-10-02'
  },
  {
    comment_text: 'I like turtles',
    comment_date: '2022-10-03'
  },
  {
    comment_text: 'I have mashed potatoes',
    comment_date: '2022-10-01'
  },
  {
    comment_text: 'Too infinity and beyond',
    comment_date: '2022-10-01'
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;