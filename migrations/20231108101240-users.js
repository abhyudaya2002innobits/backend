'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports= {
  async up (queryInterface, Sequelize) {
    
     
    //  await queryInterface.createTable('users', { id: Sequelize.INTEGER }
     
    // );
    try{
      await queryInterface.createTable('users',{id:Sequelize.INTEGER},
      {
        Name:Sequelize.STRING,
      },
      {
        email:Sequelize.DataTypes.STRING,
        allowNull:false
      },
      
      )

    }catch(error){
      console.log(`error occured ${error}`)
    }

     
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('users');
     
  }
};
