const {Sequelize}       = require('sequelize');
const config            = require('../config');

const sequelize = new Sequelize(
    config.DB_NAME,
    config.DB_USERNAME,
    config.DB_PASSWORD, {
        host              : config.DB_HOST,
        dialect           : 'mysql',
        logQueryParameters: true,
        benchmark         : true,
        dialectOptions    : {decimalNumbers: true}
    },
);

(async () => {
    try {
        await sequelize.authenticate();
    } catch (err) {
        console.log('[DB] Failed to connect. Error: ', err);
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