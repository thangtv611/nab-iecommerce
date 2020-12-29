const {DataTypes} = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Products', {
        id        : {
            type         : DataTypes.INTEGER,
            primaryKey   : true,
            autoIncrement: true,
            field        : 'id',
        },
        name      : {
            type : DataTypes.STRING,
            field: 'name',
        },
        price     : {
            type : DataTypes.DOUBLE,
            field: 'price',
        },
        brand     : {
            type : DataTypes.STRING,
            field: 'brand',
        },
        color     : {
            type : DataTypes.STRING,
            field: 'brand',
        },
        created_at: {
            type : DataTypes.DATE,
            field: 'created_at',
        },
        updated_at: {
            type : DataTypes.DATE,
            field: 'updated_at',
        },
    }, {
        tableName : 'products',
        timestamps: false,
    });
};
