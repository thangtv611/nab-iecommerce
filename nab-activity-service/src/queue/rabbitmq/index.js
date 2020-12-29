const amqp     = require('amqplib/callback_api');
const config   = require('../../config');
const handlers = require('../../handlers');
const {map}    = require('lodash');

const queue   = config.AMQP_USER_ACTIVITY_QUEUE;
const amqpurl = config.AMQP_URL;

// if the connection is closed or fails to be established at all, we will reconnect
let amqpConn = null;

function start() {
    amqp.connect(amqpurl + '?heartbeat=60', function (err, conn) {
        if (err) {
            console.error('[AMQP]', err.message);
            return setTimeout(start, 1000);
        }
        conn.on('error', function (err) {
            if (err.message !== 'Connection closing') {
                console.error('[AMQP] conn error', err.message);
            }
        });
        conn.on('close', function () {
            console.error('[AMQP] reconnecting');
            return setTimeout(start, 1000);
        });
        console.log('[AMQP] connected');
        amqpConn = conn;
        whenConnected();
    });
}

function whenConnected() {
    startWorker();
}

// A worker that acks messages only if processed succesfully
function startWorker() {
    amqpConn.createChannel(function (err, ch) {
        if (closeOnErr(err)) return;
        ch.on('error', function (err) {
            console.error('[AMQP] channel error', err.message);
        });

        ch.on('close', function () {
            console.log('[AMQP] channel closed');
        });

        ch.prefetch(10);
        ch.assertQueue(queue, {durable: true}, function (err) {
            if (closeOnErr(err)) return;
            ch.consume(queue, processMsg, {noAck: false});
            console.log('Worker is started');
        });

        function processMsg(msg) {
            work(msg, function (ok) {
                try {
                    if (ok)
                        ch.ack(msg);
                    else
                        ch.reject(msg, true);
                } catch (e) {
                    closeOnErr(e);
                }
            });
        }
    });
}

function work(msg, cb) {
    // console.log('Got msg ', JSON.parse(msg.content.toString()));
    map(handlers, async handler => {
        try {
            const result = await handler(JSON.parse(msg.content.toString()));
            console.log('[Execute result]: ', result);
        } catch (err) {
            console.log('[Execute handler error]: ', err);
        }
    });
    cb(true);
}

function closeOnErr(err) {
    if (!err) return false;
    console.error('[AMQP] error', err);
    amqpConn.close();
    return true;
}

start();