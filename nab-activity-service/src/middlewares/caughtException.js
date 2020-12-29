const caughtException = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = 200;
        ctx.body   = {
            status: {
                code   : err.statusCode || err.status || 500,
                message: 'failed'
            },
            body  : {
                message: err.toString()
            },
        };
    }
};

module.exports = caughtException;