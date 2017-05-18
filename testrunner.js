/*global describe, beforeEach, afterEach, it */
/*jslint nomen:true, plusplus:true */
/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
"use strict";
// ./node_modules/.bin/mocha -R spec testrunner.js
// Require the supertest module
var request = require('supertest');
// Decribe a simple test
describe('Loading the Express Framework', function(){
  // Declare the server variable
  var server;
  // Before any test can be execute the server needs to be intialized
  beforeEach(function(){
    //server = require('../private/server');
    server = require('./server');
  });
  afterEach(function(){ server.close(); });

  it('responds to /', function testSlash(done){
    // This expects the server to return a 200 message
    request(server).get('/').expect(200, done);
  });

  it('404 everything else', function testPath(done){
    request(server).get('/foo/bar').expect(404, done);
  });
});
