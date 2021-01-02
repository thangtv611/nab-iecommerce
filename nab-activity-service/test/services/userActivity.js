const {describe, it, beforeEach, afterEach} = require('mocha');
const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');

const stub = sinon.stub;
const sinonAssert = sinon.assert;

describe('userActivity service', () => {
    let module;
    let createStub;
    let findStub;

    beforeEach(() => {
        createStub = stub();
        findStub = stub();
        module = proxyquire('../../src/services/userActivity', {
            '../schemas/userActivity': {
                create: createStub,
                find: findStub
            }
        });
    });

    afterEach(() => {
        createStub.reset();
        findStub.reset();
        module = undefined;
    });

    it('should writeUserActivity', async () => {
        createStub.callsFake(() => Promise.resolve({}));

        await module.writeUserActivity({
            username: 'admin',
            searchCriteria: {hello: 'world'},
            agentInfo: {hello: 'world'}
        });

        sinonAssert.calledOnce(createStub);
        sinonAssert.calledWith(createStub, {
            username: 'admin',
            searchCriteria: JSON.stringify({hello: 'world'}),
            agentInfo: JSON.stringify({hello: 'world'})
        });
    });

    it('should find', async function () {
        findStub.callsFake(() => Promise.resolve([]));
        await module.getUserActivities();
    });
});
