process.env.ENV = "test";

const {beforeEach, afterEach, describe, it} = require('mocha');
const app = require('../src');

let server;

// beforeEach(done => {
//     console.log('[TEST] start server');
//     server = app.listen(4000);
//     done();
// });
//
// afterEach(done => {
//     console.log('[TEST] shutdown server');
//     server.close();
//     done();
// })
//
// describe('Application', () => {
//     it('<200> call api with success ', (done) => {
//         console.log(server);
//         done();
//     })
// })
