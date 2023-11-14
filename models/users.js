// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Users.init({
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     email: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Users',
//   });
//   return Users;
// };




// const { sequelize } = require("")







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


// module.exports={User}


// const { sequelize } = require("")





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


const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Users = sequelize.define('Users', {
  // Model attributes are defined here
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});
sequelize.sync().then(() => {
  console.log('user table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});



module.exports={Users}



