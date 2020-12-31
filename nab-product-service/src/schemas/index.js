const { Sequelize } = require('sequelize');
const config = require('../config');

const sequelize = new Sequelize(config.MYSQL_URL, {
    dialect: 'mysql',
    dialectOptions: { decimalNumbers: true },
    retry: {
        match: [
            /SequelizeConnectionError/,
            /SequelizeConnectionRefusedError/,
            /SequelizeHostNotFoundError/,
            /SequelizeHostNotReachableError/,
            /SequelizeInvalidConnectionError/,
            /SequelizeConnectionTimedOutError/
        ],
        name: 'query',
        backoffBase: 100,
        backoffExponent: 1.1,
        timeout: 60000,
        max: Infinity
    }
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('[DB] Connected');
    } catch (err) {
        console.log('[DB] Failed to connect. Detail: ', err);
        // process.exit(-1);
    }
})();

const modelDefiners = [
    require('./product'),
    require('./user'),
];

modelDefiners.forEach(model => {
    model(sequelize);
});

module.exports = sequelize;