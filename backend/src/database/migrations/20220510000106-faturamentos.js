'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('faturamentos', {
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

      faturamento: {
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
    return queryInterface.dropTable('faturamentos')

  }
};
