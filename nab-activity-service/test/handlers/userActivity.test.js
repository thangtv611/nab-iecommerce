const proxyquire = require('proxyquire').noCallThru();
const {describe, it, beforeEach, afterEach} = require('mocha');
const sinon = require('sinon');
const chai = require('chai');

const stub = sinon.stub;
const assert = chai.assert;

describe('userActivity', () => {
    describe('getActivities', () => {
        let userActivityHandler;
        let writeUserActivityStub;

        beforeEach(() => {
            writeUserActivityStub = stub();
            userActivityHandler = proxyquire('../../src/handlers/userActivity', {
                '../services/userActivity': {
                    writeUserActivity: writeUserActivityStub
                }
            });
        });

        afterEach(() => {
            writeUserActivityStub.reset();
        });

        it('should get without exception', async () => {
            writeUserActivityStub.callsFake(() => Promise.resolve());
            let error;

            try {
                const activity = {};
                await userActivityHandler.writeUserActivity(activity);
            } catch (err) {
                error = err;
            }

            assert.isUndefined(error);
        });
    });
});
