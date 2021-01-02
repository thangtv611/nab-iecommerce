const proxyquire = require('proxyquire').noCallThru();
const {describe, it} = require('mocha');

describe('queue service', () => {
    it('should import', () => {
        proxyquire('../../src/services/queue.js', {
            '../queue': {
                publish: () => {}
            }
        }).sendToQueue({ hello: 'world' });
    });
});
