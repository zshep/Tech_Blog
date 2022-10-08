// import important parts of sequelize library
const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Post = require('./Post');

class Comment extends Model {}

Comment.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_text: {
            type: DataTypes.TEXT,
            allowNull: false,
            
        },
        comment_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Post,
                key: "id",
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            }
        
        },
    },
    
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'Comment',

    },

);

module.exports = Comment;