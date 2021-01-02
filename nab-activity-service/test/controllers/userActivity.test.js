const proxyquire = require('proxyquire').noCallThru();
const {describe, it, beforeEach, afterEach} = require('mocha');
const sinon = require('sinon');
const chai = require('chai');

const stub = sinon.stub;
const assert = chai.assert;

describe('userActivity', () => {
    describe('getActivities', () => {
        let userActivityController;
        let getUserActivitiesStub;

        beforeEach(() => {
            getUserActivitiesStub = stub();
            userActivityController = proxyquire('../../src/controllers/userActivity', {
                '../services/userActivity': {
                    getUserActivities: getUserActivitiesStub
                }
            });
        });

        afterEach(() => {
            getUserActivitiesStub.reset();
        });

        it('should get without exception', async () => {
            getUserActivitiesStub.callsFake(() => Promise.resolve());
            let error;

            try {
                const ctx = {};
                await userActivityController.getActivities(ctx);
            } catch (err) {
                error = err;
            }

            assert.isUndefined(error);
        });
    });
});
