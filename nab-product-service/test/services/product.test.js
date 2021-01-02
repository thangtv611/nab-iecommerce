const {describe, it, beforeEach, afterEach} = require('mocha');
const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');
const chai = require('chai');

const stub = sinon.stub;
const assert = chai.assert;
const sinonAssert = sinon.assert;

describe('product service', () => {
    let productService;
    let findAndCountAllStub = stub();

    beforeEach(() => {
        productService = proxyquire('../../src/services/product', {
            '../schemas': {
                models: {
                    Products: {
                        findAndCountAll: findAndCountAllStub
                    }
                }
            }
        });
    });

    afterEach(() => {
        findAndCountAllStub.reset();
    });

    it('should search with filter', async () => {
        findAndCountAllStub.callsFake(() => {
            return {count: 10, rows: []};
        });
        let err;
        try {
            await productService.getAllProduct({
                filter: ['name', 'price'],
                page_size: 10,
                page_number: 1
            });
        } catch (error) {
            err = error;
        }

        sinonAssert.calledOnce(findAndCountAllStub);
        sinonAssert.calledWith(findAndCountAllStub, {
            attributes: ['name', 'price'],
            offset: 0,
            limit: 10
        });
        assert.isUndefined(err);
    });

    it('should search with compare value', async () => {
        findAndCountAllStub.callsFake(() => {
            return {count: 10, rows: []};
        });
        let err;
        try {
            await productService.getAllProduct({
                // filter: ['name', 'price'],
                search: {
                    name: 'iphone'
                },
                page_size: 10,
                page_number: 1
            });
        } catch (error) {
            err = error;
        }

        sinonAssert.calledOnce(findAndCountAllStub);
        sinonAssert.calledWith(findAndCountAllStub, {
            // attributes: ['name', 'price'],
            offset: 0,
            limit: 10,
            where: {
                name: 'iphone'
            }
        });
        assert.isUndefined(err);
    });

    it('should search with sort', async () => {
        findAndCountAllStub.callsFake(() => {
            return {count: 10, rows: []};
        });
        let err;
        try {
            await productService.getAllProduct({
                search: {
                    name: 'iphone'
                },
                page_size: 10,
                page_number: 1,
                sort: {
                    name: 'asc'
                }
            });
        } catch (error) {
            err = error;
        }

        sinonAssert.calledOnce(findAndCountAllStub);
        sinonAssert.calledWith(findAndCountAllStub, {
            offset: 0,
            limit: 10,
            where: {
                name: 'iphone'
            },
            order: [
                ['name', 'asc']
            ]
        });
        assert.isUndefined(err);
    });
});
