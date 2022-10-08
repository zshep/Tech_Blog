// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Post extends Model {}


//set up fields for post model
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,

        },
        post_content: {
            type: DataTypes.TEXT,
            allowNull: false,

        },
        user_creator_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },


        },
        
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
      }
);

module.exports = Post;
