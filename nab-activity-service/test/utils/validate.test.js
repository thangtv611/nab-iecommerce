const {describe, it} = require('mocha');
const {assert} = require('chai');
const {validateSearchProduct} = require('../../src/utils/validation');

describe('utils/validate', () => {
    describe('validateSearchProduct', () => {
        it('should validate payload and return expect data', () => {
            const payload = {
                filter: [],
                sort: {
                    price: 'asc',
                },
                search: {
                    name: 'Apple',
                },
            };
            const expect = {
                sort: {
                    price: 'asc',
                },
                page_size: 10,
                page_number: 1,
                search: {
                    name: 'Apple',
                },
                filter: [],
            };

            const {error, value} = validateSearchProduct(payload);
            assert.isUndefined(error);
            assert.deepEqual(value, expect);
        });
    });
});
