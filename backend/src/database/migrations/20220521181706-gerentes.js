'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    return await queryInterface.createTable('gerentes',{
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
        unique: true,
        allowNull: false
      },


      password: {
        type: Sequelize.STRING,
        allowNull: false
      },


      token: {
        type: Sequelize.STRING,
        allowNull: true
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

    return await queryInterface.dropTable('gerentes')
  }
};
