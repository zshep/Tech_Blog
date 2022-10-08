// import models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');



//connection between post and User
Post.belongsTo(User, {
    foreignKey: "user_creator_id",
});
User.hasMany(Post, {
    foreignKey: "user_creator_id",
});

//connection between comments and posts
Comment.belongsTo(Post, {
    foreignKey: "post_id",
});
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "cascade",
});

//connection between Users and comments
Comment.belongsTo(User, {
    foreignKey: "user_id",
});
User.hasMany(Comment, {
    foreignKey: "user_id",
});

//exports
module.exports = {
    User,
    Post,
    Comment,
};