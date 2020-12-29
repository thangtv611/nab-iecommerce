const Joi                     = require('joi');
const {validateSearchProduct} = require('../utils/validation');
const analysisRequest = require('../utils/analysisRequest');
const productService          = require('../services/product');
const { publish } = require('../queue');

const getProducts = async ctx => {
    const {error, value} = validateSearchProduct(ctx.request.body);
    publish({
        searchCriteria: value,
        agentInfo: analysisRequest(ctx),
        username: 'user', // @TODO: mock username
    });

    if (error) {
        throw error;
    }

    console.log(value);

    ctx.body = await productService.getAllProduct(value);
};

const createProduct = async (ctx) => {
    const {error, value} = Joi.object({
        name : Joi.string()
            .min(10)
            .max(50)
            .required(),
        price: Joi.number()
            .positive(),
        brand: Joi.string()
            .required(),
    }).validate(ctx.request.body);

    if (error) {
        throw new Error(error.toString());
    }

    ctx.body = await productService.createProduct(value);
};

module.exports = {
    getProducts,
    createProduct,
};