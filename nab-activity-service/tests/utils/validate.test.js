const { describe, it }          = require('mocha');
const { assert }                = require('chai');
const { validateSearchProduct } = require('../../src/utils/validation');

describe('utils/validate', () => {
  describe('validateSearchProduct', () => {
    it('should validate payload and return expect data', () => {
      const payload = {
        filter: [],
        sort  : {
          price: "asc"
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
      assert.isUndefined(error);
      assert.deepEqual(value, expect);
    });
  });
});