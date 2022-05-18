'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('faturamentodays', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },


      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },


      vendidos: {
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
    return await queryInterface.dropTable('faturamentodays');
  }

};

