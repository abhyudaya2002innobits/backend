
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     
    
     
    // );
    try{
      await queryInterface.createTable('user',{id:Sequelize.INTEGER},
      {
        user_name:Sequelize.DataTypes.STRING,
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
    
     await queryInterface.dropTable('user');
     
  }
};
