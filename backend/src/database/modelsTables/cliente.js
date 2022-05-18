module.exports = (Sequelize, DataTypes) => {
    const cliente = Sequelize.define('cliente', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });

    return cliente;
};
