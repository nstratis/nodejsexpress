/* global */
/* eslint no-plusplus:0, import/no-extraneous-dependencies:0, global-require:0 */
/**
 * @copyright (c) Copyright 2019 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
// Require passport and the oAuth2 Strategy module
const passport = require('passport'),
OAuth2Strategy = require('passport-oauth2').Strategy,
// Get the application config file with the params
config = require('../config/config')();

module.exports = (authApp) => {
  console.log('passport.initialization()', authApp);
  console.log(config);

  // Set the oAuth 2 Strategy
  passport.use('provider', new OAuth2Strategy({
    authorizationURL: config.authorizationURL,
    tokenURL: config.tokenURL,
    clientID: config.clientID,
    response_type: config.response_type,
    clientSecret: config.clientSecret,
    callbackURL: config.callbackURL
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Callback Executed!', accessToken, refreshToken, profile, done);
  }));
  return passport;
};
