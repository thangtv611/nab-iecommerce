const { describe, it }          = require('mocha');
const { assert }                = require('chai');
const { validateSearchProduct } = require('../../src/utils/validation');

describe('utils/validate', () => {
  describe('validateSearchProduct', () => {
    it('should validate payload and return expect data', () => {
      const payload = {
        filter: [],
        sort  : {
          price: {
            gte: 100,
            lte: 200,
          },
        },
        search: {
          name: "Apple",
        },
      };
      const expect  = {
        page_size  : 10,
        page_number: 1,
      };

      const { error, value } = validateSearchProduct(payload);
      assert.isNull(error);
      assert.deepEqual(result, value);
    });
  });
});