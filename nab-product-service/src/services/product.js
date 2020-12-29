const { Op }                    = require('sequelize');
const { models }                = require('../schemas');
const { size, isEmpty, reduce } = require('lodash');

const getAllProduct = async ({ filter, sort, search, page_size, page_number }) => {
    const condition = {
        offset: (page_number - 1) * page_size,
        limit : page_size,
    };

    if (size(filter) > 0) {
        condition['attributes'] = filter;
    }

    if (!isEmpty(search)) {
        condition['where'] = search;
    }

    if (!isEmpty(sort)) {
        condition['order'] = reduce(sort, (acc, value, key) => {
            acc.push([key, value]);
            return acc;
        }, []);
    }

    const { count, rows } = await models.Products.findAndCountAll(condition);

    return {
        content     : rows,
        current_page: page_number,
        total_page  : Math.round(count / page_size),
        total_rows  : count,
    };
};

const createProduct = payload => {
    return new models.Products(payload).save();
};

module.exports = {
    getAllProduct,
    createProduct,
};