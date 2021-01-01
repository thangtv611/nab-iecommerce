const {it, describe, before, after} = require('mocha');
const proxyquire                    = require('proxyquire').noCallThru();
const sinon                         = require('sinon');

const stub = sinon.stub;

describe('product controllers', () => {
    let validateSearchProductStub;
    const productController = proxyquire('../../src/controllers/product.js', {
        '../services/product': {
            getAllProduct: () => Promise.resolve()
        },
        '../services/queue'  : {
            sendToQueue: () => {
            }
        },
        '../utils/validation': {
            validateSearchProduct: validateSearchProductStub
        }
    });

    before(() => {
        validateSearchProductStub = stub();
    });

    after(() => {
        validateSearchProductStub.restore();
    });

    it('first', async () => {
        validateSearchProductStub.returns({
            error: new Error('validate error'),
            value: {}
        });
        const ctx = {request: {body: {foo: 'baz'}}};
        await productController.getProducts(ctx);
    });
});