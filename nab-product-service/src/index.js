const process      = require('process');
const Koa          = require('koa');
const Router       = require('koa-router');
const koaBody      = require('koa-body');
const logger       = require('koa-logger');
const config       = require('./config');
const caughtException = require('./middlewares/caughtException');

const app    = new Koa();
const router = new Router();

const PORT = config.PORT;

/* ignore log in test env */
if (process.env.ENV !== 'test') {
    app.use(logger());

    require('./schemas');
    require('./queue/rabbitmq');
}

app.use(caughtException);
app.use(koaBody());
require('./controllers')(router);
app.use(router.routes());
app.use(router.allowedMethods());

/* handle run && shutdown */
const terminate = async signal => {
    process.kill(process.pid, signal);
};

const handleError = (err, ctx) => {
    if (ctx === null) {
        console.error('Error: ', 'Unhandled exception occured - ' + JSON.stringify(err));
    }
};

app.on('error', handleError);

if (require.main === module) {
    const server = app.listen(PORT, () => {
        console.log(`API server started on http://localhost:${PORT}/`);
    });

    server.on('error', handleError);

    const errors = ['unhandledRejection', 'uncaughtException'];
    errors.map(error => {
        process.on(error, handleError);
    });

    const signals = ['SIGTERM', 'SIGINT', 'SIGUSR2'];
    signals.map(signal => {
        process.once(signal, async () => terminate(signal));
    });
}

module.exports = app;