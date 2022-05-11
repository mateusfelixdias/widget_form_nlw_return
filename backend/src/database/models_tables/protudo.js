module.exports = function (Sequelize, DataTypes) {
    const produto = Sequelize.define('produto', {
        nome: DataTypes.STRING,
        preço: DataTypes.FLOAT
    });

    return produto;
};
