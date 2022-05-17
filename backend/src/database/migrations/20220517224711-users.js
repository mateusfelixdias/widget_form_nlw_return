'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    return await queryInterface.createTable('users',{
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },


      name: {
        type: Sequelize.STRING,
        allowNull: false
      },


      email: {
        type: Sequelize.STRING,
        allowNull: false
      },


      password: {
        type: Sequelize.STRING,
        allowNull: false
      },


      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },


      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },


  async down (queryInterface, Sequelize) {

    return await queryInterface.dropTable('users')
  }
};
