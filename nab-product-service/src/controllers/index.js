const product = require('./product');

const index = ctx => {
    ctx.body = {msg: 'Hello'};
};

module.exports = (router) => {
    router.get('/', index);

    // product
    router.post('/product/search', product.getProducts);
};
