// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Post = require('./post');

class Comment extends Model {}

Comment.init (
    {


    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',

    },




);

module.exports = Post;