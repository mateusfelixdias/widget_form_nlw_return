module.exports = function (Sequelize, DataTypes) {
    const produto = Sequelize.define('produto', {
        name: DataTypes.STRING,
        price: DataTypes.FLOAT
    });

    return produto;
};
