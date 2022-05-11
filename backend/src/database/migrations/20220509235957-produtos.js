'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('produtos', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      nome: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },

      preço: {
        type: Sequelize.FLOAT,
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
    return queryInterface.dropTable('produtos')

  }
};
