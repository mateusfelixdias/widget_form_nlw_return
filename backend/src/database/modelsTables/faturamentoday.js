module.exports = function (Sequelize, DataTypes) {
    const faturamentoday = Sequelize.define('faturamentoday', {
        name:  DataTypes.STRING,
        vendidos: DataTypes.INTEGER,
        faturamentoday: DataTypes.FLOAT,
    });

    return faturamentoday;
};
