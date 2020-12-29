const Joi = require('joi');

const productFields = ['id', 'name', 'price', 'color', 'brand'];
const sortCond      = ['asc', 'desc'];

const validateSearchProduct = payload => Joi
    .object()
    .keys({
        filter     : Joi.array()
            .items(
                Joi.string().valid(...productFields),
            )
            .unique(),
        sort       : Joi
            .object()
            .keys({
                name : Joi.string().valid(...sortCond),
                price: Joi.string().valid(...sortCond),
                color: Joi.string().valid(...sortCond),
                brand: Joi.string().valid(...sortCond),
            }),
        page_size  : Joi
            .number()
            .positive()
            .max(50)
            .default(10),
        page_number: Joi
            .number()
            .positive()
            .default(1),
        search     : Joi
            .object()
            .keys({
                name : Joi.any(),
                price: Joi.any(),
                color: Joi.any(),
                brand: Joi.any(),
            })
    })
    .validate(payload);

module.exports = {
    validateSearchProduct,
};