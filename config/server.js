const {Sequelize,DataTypes}= require("sequelize");
const {DB_NAME,DB_USERNAME, DB_PASSWORD}=require('./config')

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



module.exports={dbconnect,sequelize}