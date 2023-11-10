const {Sequelize,DataTypes}= require("sequelize");
const {DB_NAME,DB_USERNAME, DB_PASSWORD}=require('./config');
const { resolve } = require("path");

// const sequelize = new Sequelize(
//  'user',
//  'root',
//  'rgbXYZ@9182',
//   {
//     host: 'localhost',
//     dialect: 'mysql'
//   })
const sequelize=new Sequelize(DB_NAME,
   DB_USERNAME,
   DB_PASSWORD,
   {
      host:'localhost',
      dialect:'mysql'
   }

   )


const dbconnect=sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

// const dbconnect=async (rej,res)=>{
//    try{
//       await sequelize.authenticate();
//       console.log("connectecd")
//    }catch(error){
//       console.log(`not connected ${error}`)
//    }
// }

module.exports={dbconnect,sequelize}