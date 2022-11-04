const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class User extends Model {
    // add in built in method to  encrypt password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.user_password);
      }
}

// defining each coloumn for User
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4],
        }
    },
  
  },
  {
    //adding hooks to hash the password
    hooks: {
        beforeCreate: async (newUserData) => {
        newUserData.user_password = await bcrypt.hash(newUserData.user_password, 10)
        return newUserData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
  }
);

module.exports = User;