/* global describe, beforeEach, afterEach, it */
/* eslint no-plusplus:0, import/no-extraneous-dependencies:0, global-require:0 */
/**
 * @copyright (c) Copyright 2019 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
// ./node_modules/.bin/mocha -R spec testrunner.js
// Require the supertest module
const request = require('supertest');
// Decribe a simple test
describe('Loading the Express Framework', function() {
  let server;
  // Before any test can be execute the server needs to be intialized
  beforeEach(function() {
    // server = require('../private/server');
    server = require('./server');
  });
  afterEach(function() {
    server.close();
  });

  it('responds to /', (done) => {
    // This expects the server to return a 200 message
    request(server).get('/').expect(200, done);
  });

  it('404 everything else', (done) => {
    request(server).get('/foo/bar').expect(404, done);
  });
});
