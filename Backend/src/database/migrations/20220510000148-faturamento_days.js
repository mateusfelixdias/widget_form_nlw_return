'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('faturamentodays', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },

      total: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      faturamentoday: {
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
    return queryInterface.dropTable('faturamentodays');
  }

};
