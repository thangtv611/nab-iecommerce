const index = ctx => {
    ctx.body = {msg: 'Hello'};
};

module.exports = (router) => {
    router.get('/', index);
};
