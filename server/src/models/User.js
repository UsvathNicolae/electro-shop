module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            role:{
                type: DataTypes.ENUM,
                values: ['USER', 'ADMIN'],
                defaultValue: 'USER',
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }
    );
};
