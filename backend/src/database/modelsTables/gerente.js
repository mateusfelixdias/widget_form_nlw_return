module.exports = (Sequelize, DataTypes) => {
    const gerente = Sequelize.define('gerente', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
    
    return gerente;
};
