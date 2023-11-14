 const { Sequelize, Model, DataTypes } = require('sequelize');
 const sequelize = new Sequelize('sqlite::memory:');
 const migrations=require('../migrations/20231110071906-user')

// const { sequelize } = require("")

class User extends Model {}
 User.init({
   user_name: DataTypes.STRING,
  email: DataTypes.STRING
 }, { sequelize, modelName: 'user' });
 module.exports=User

// // // Include Sequelize module. 
// // module.exports = (datatypes , sequelize) => {
// //   const User = sequelize.define('user', {
// //     // id: {
// //     //   type: datatypes.integer,
// //     // },
// //     user_name: {
// //       type: datatypes.string,
// //     },
// //     email: {
// //       type: datatypes.string,
// //     },
// //     // lastemail: {
// //     //   type: datatypes.time,
// //     // }
// //   })
// //   return User;
// //   };

// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// const User = sequelize.define('user', {
//   // Model attributes are defined here
//   user_name: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   email: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// }, {
//   // Other model options go here
// });
// sequelize.sync().then(() => {
//   console.log('user table created successfully!');
// }).catch((error) => {
//   console.error('Unable to create table : ', error);
// });

// module.exports=(sequelize,DataTypes)=>{

//   const User=sequelize.define("user",{
//     user_name:{
//       type:DataTypes.String,
//       allowNull:false
//     },
//     email:{
//       type:DataTypes.String
//     }
//   })
//   return User

// }

