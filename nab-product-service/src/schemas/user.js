const { DataTypes } = require('sequelize');

module.exports = connection => {
    connection.define('User', {
        id  : {
            type         : DataTypes.INTEGER,
            primaryKey   : true,
            autoIncrement: true,
            field        : 'id',
        },
        username: {
            type : DataTypes.STRING,
            field: 'name',
        },
    }, {
        tableName: 'users',
        timestamps: false,
    });
};
