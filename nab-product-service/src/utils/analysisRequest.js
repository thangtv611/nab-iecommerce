const {get} = require('lodash');

module.exports = (ctx) => ({
    ip   : get(ctx, 'request.ip'),
    agent: get(ctx, 'request.header.user-agent'),
    url  : get(ctx, 'request.url'),
});