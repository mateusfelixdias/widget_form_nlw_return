module.exports = function (Sequelize, DataTypes) {
    const faturamento = Sequelize.define('faturamento', {
        nome: DataTypes.STRING,
        faturamento: DataTypes.FLOAT
    });

    return faturamento;
};
