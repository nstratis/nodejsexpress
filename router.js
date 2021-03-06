/* global */
/* eslint no-plusplus:0 */
/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
// Set the reference to the index controller
const indexCon = require('./controllers/index.controller'),
userCon = require('./controllers/userdetails.controllers');

// Export the routes
module.exports = (authApp) => {
  // Set the route to the index page
  authApp.get('/', indexCon.index);
  // Set the route to the userdetails page
  authApp.get('/userdetails', userCon.userdetails);

  authApp.use('/invalid', (req, res, next) => {
    console.warn(req, res, next);
    res.render('invalid');
  });
};
