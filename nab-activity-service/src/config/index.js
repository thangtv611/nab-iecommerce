const process = require('process');

require('dotenv-flow').config();

module.exports = {
    PORT: process.env.PORT,

    MONGODB_URL: process.env.MONGODB_URL,
   
    AMQP_URL                : process.env.AMQP_URL,
    AMQP_USER_ACTIVITY_QUEUE: process.env.AMQP_USER_ACTIVITY_QUEUE,
};
