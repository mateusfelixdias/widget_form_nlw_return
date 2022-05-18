module.exports = function (Sequelize, DataTypes) {
    const faturamento = Sequelize.define('faturamento', {
        name: DataTypes.STRING,
        faturamento: DataTypes.FLOAT
    });

    return faturamento;
};
