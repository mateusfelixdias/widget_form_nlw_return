module.exports = (Sequelize, DataTypes) => {
    const funcionario = Sequelize.define('funcionario', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        token: DataTypes.STRING
    });
    
    return funcionario;
};
