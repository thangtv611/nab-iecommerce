const {StatusCodes} = require('http-status-codes');

const caughtException = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.statusCode || err.status || StatusCodes.INTERNAL_SERVER_ERROR;
        ctx.body = {
            message: err.toString()
        };
    }
};

module.exports = caughtException;
