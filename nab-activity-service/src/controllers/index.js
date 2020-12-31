const userActivity = require('./userActivity');

const index = ctx => {
    ctx.body = {msg: 'Hello'};
};

module.exports = (router) => {
    router.get('/', index);

    router.get('/activities', userActivity.getActivities);
};
