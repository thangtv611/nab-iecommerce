const process = require('process');

require('dotenv-flow').config();

module.exports = {
    PORT: process.env.PORT,

    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME    : process.env.DB_NAME,
    DB_HOST    : process.env.DB_HOST,
    
    AMQP_URL                : process.env.AMQP_URL,
    AMQP_USER_ACTIVITY_QUEUE: process.env.AMQP_USER_ACTIVITY_QUEUE,
};
