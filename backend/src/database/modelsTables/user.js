module.exports = (Sequelize, DataTypes) => {
    const user = Sequelize.define('user', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    });
    
    return user;
};
