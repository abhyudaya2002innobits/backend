const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const migrations=require('../migrations/20231110071906-user')

class User extends Model {}
User.init({
  user_name: DataTypes.STRING,
  email: DataTypes.STRING
}, { sequelize, modelName: 'user' });
module.exports=User