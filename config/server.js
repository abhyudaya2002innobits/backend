const {Sequelize,DataTypes}= require("sequelize");
const {DB_NAME,DB_USERNAME, DB_PASSWORD}=require('./connection');
const { resolve } = require("path");

// const sequelize = new Sequelize(
//  'user',
//  'root',
//  'rgbXYZ@9182',
//   {
//     host: 'localhost',
//     dialect: 'mysql'
//   })

// const DB_NAME='user'
// const DB_USERNAME='root'
// const DB_PASSWORD='rgbXYZ@9182'

module.exports={DB_NAME,DB_USERNAME,DB_PASSWORD}

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