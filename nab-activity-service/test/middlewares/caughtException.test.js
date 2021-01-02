const { describe, it } = require('mocha');
const { assert }       = require('chai');
const { isEmpty, get } = require('lodash');
const caughtException  = require('../../src/middlewares/caughtException');

describe('middlewares', () => {
    describe('caughtException', () => {
        it('should catch error and return error as body', async () => {
            let ctx    = {};
            const next = () => Promise.reject(new Error('error'));
            await caughtException(ctx, next);

            assert.isTrue(!isEmpty(ctx));
            assert.isTrue(!isEmpty(get(ctx, 'body')));
            assert.equal(ctx.status, 500);
        });

        it('should not caught error cause next middleware not throw error', async () =>  {
            let ctx    = {};
            const next = () => Promise.resolve();
            await caughtException(ctx, next);

            assert.isTrue(isEmpty(ctx));
            assert.isTrue(isEmpty(get(ctx, 'body')));
            assert.notEqual(ctx.status, 200);
        });
    });
});
