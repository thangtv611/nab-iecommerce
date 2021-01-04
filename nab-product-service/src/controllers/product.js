const {validateSearchProduct} = require('../utils/validation');
const analysisRequest = require('../utils/analysisRequest');
const productService = require('../services/product');
const {sendToQueue} = require('../services/queue');
const {StatusCodes} = require('http-status-codes');

const getProducts = async ctx => {
    const {error, value} = validateSearchProduct(ctx.request.body);
    if (error) {
        throw error;
    }

    sendToQueue({
        searchCriteria: value,
        agentInfo: analysisRequest(ctx),
        username: 'user', // mock username
    });
 
    // we dont need to catch error here, the caughtException middleware handles this.
    ctx.status = StatusCodes.OK;
    ctx.body = await productService.getAllProduct(value);
};

module.exports = {
    getProducts,
};
