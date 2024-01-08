module.exports = (sequelize, DataTypes) => {
    const UserAccount = sequelize.define("UserAccount", {
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        MiddleName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        UserName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        PassWord: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    return UserAccount;
} ;