const process = require('process');

require('dotenv-flow').config();

module.exports = {
    PORT: process.env.PORT,

    MYSQL_URL: process.env.MYSQL_URL,
    
    AMQP_URL                : process.env.AMQP_URL,
    AMQP_USER_ACTIVITY_QUEUE: process.env.AMQP_USER_ACTIVITY_QUEUE,
};
