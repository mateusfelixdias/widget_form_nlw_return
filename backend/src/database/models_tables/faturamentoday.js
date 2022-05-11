module.exports = function (Sequelize, DataTypes) {
    const faturamentoday = Sequelize.define('faturamentoday', {
        nome:  DataTypes.STRING,
        total: DataTypes.INTEGER,
        faturamentoday: DataTypes.FLOAT,
    });

    return faturamentoday;
};
