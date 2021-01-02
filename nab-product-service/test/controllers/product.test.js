const {it, describe, beforeEach, afterEach} = require('mocha');
const chai = require('chai');
const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');

const stub = sinon.stub;
const sinonAssert = sinon.assert;
const assert =chai.assert;

describe('product controllers', () => {
    let validateSearchProductStub;
    let productController;
    let getAllProductStub;
    let sendToQueueStub;

    beforeEach(() => {
        validateSearchProductStub = stub();
        getAllProductStub = stub();
        sendToQueueStub = stub();

        productController = proxyquire('../../src/controllers/product.js', {
            '../services/product': {
                getAllProduct: getAllProductStub
            },
            '../services/queue': {
                sendToQueue: sendToQueueStub
            },
            '../utils/validation': {
                validateSearchProduct: validateSearchProductStub
            }
        });

    });

    afterEach(() => {
        validateSearchProductStub.reset();
        getAllProductStub.reset();
        sendToQueueStub.reset();
    });

    it('throw error cause payload is not valid', async () => {
        validateSearchProductStub.callsFake(() => ({
            error: Error('validate error'),
            value: {}
        }));
        const ctx = {request: {body: {foo: 'baz'}}};

        let err;
        try {
            await productController.getProducts(ctx);
        } catch (error) {
            err = error;
        }

        assert.isNotNull(err);
        assert.isTrue(err instanceof Error);
        sinonAssert.calledOnce(sendToQueueStub);
        sinonAssert.calledOnce(validateSearchProductStub);
        sinonAssert.notCalled(getAllProductStub);
    });

    it('search success', async () => {
        validateSearchProductStub.callsFake(() => ({
            value: {hello: 'world'}
        }));
        const ctx = {request: {body: {hello: 'world'}}};

        let err;
        try {
            await productController.getProducts(ctx);
        } catch (error) {
            err = error;
        }

        assert.isNotNull(ctx.body);
        assert.isUndefined(err);
        sinonAssert.calledOnce(sendToQueueStub);
        sinonAssert.calledOnce(validateSearchProductStub);
        sinonAssert.calledOnce(getAllProductStub);
    });
});
