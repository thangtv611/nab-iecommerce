const {describe, it} = require('mocha');
const _ = require('lodash');
const chai = require('chai');
const analysisRequest = require('../../src/utils/analysisRequest');

const assert = chai.assert;

describe('analysisRequest', () => {
    it('should call', () => {
        const ctx = {
            request: {
                ip: '127.0.0.1',
                header: {
                    'user-agent': 'Chrome',
                },
                url: 'http://localhost'
            }
        };
        const result = analysisRequest(ctx);

        assert.isFalse(_.isUndefined(_.get(result, 'ip')));
        assert.isFalse(_.isUndefined(_.get(result, 'agent')));
        assert.isFalse(_.isUndefined(_.get(result, 'url')));
    });
});
