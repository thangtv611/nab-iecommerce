const {publish} = require('../queue');

module.exports = {
    sendToQueue: data => publish(data)
};