/* global */
/* eslint no-plusplus:0, import/no-extraneous-dependencies:0, global-require:0 */
/**
 * @copyright (c) Copyright 2017 AV Digital Media Ltd. All Rights Reserved.
 * No unauthorized copying, distribution or modification to this code in whole
 * or in part is permitted without the express permission of
 * AV Digital Media Ltd (UK).
 */
// Get the application config file with the params
const request = require('request'),
config = require('../config/config')();

exports.userdetails = (req, res) => {
  // Declare the token data
  var tData;

  function renderUser() {
    var opts = {
      url: 'https://staging-auth.wallstreetdocs.com/oauth/userinfo',
      method: 'GET',
      auth: {
        bearer: tData.access_token
      },
      headers: {
        'Cache-Control': 'no-cache'
      }
    };

    // Execute the request to retieve the user information
    request(opts, (err, usrRes) => {
      if (usrRes !== undefined && usrRes.body !== undefined) {
        // Determine if the request was authorized
        if (usrRes.body === 'Unauthorized') {
          // Redirect to the login page
          res.redirect('/');
        } else {
          // Parse the response body as JSON
          const uData = JSON.parse(usrRes.body);
          // Set the page Info object
          res.pageInfo = {};
          // Set the default page title and description
          res.pageInfo.title = 'Your Details';
          res.pageInfo.desc = 'The profile details currently stored on the Wall Street Site are below.';
          // Set the custom user value
          res.pageInfo.user_type = uData.user_type;
          res.pageInfo.organisation_name = uData.organisation_name;
          res.pageInfo.display_name = uData.display_name;
          res.pageInfo.given_name = uData.name.given_name;
          res.pageInfo.family_name = uData.name.family_name;
          res.pageInfo.created_at = uData.created_at;
          res.pageInfo.updated_at = uData.updated_at;
          // Render the user details
          res.render('userdetails', res.pageInfo);
        }
      } else {
        res.redirect('/');
      }
    });
  }

  // Retrieve the user tokens from the server
  // Determine if the user has already logged in
  if (req.query.code !== undefined) {
    // Execute the request to retrieve the users info
    const code = req.query.code,
    options = {
      url: config.tokenURL,
      method: 'POST',
      form: {
        code: code,
        grant_type: 'authorization_code',
        client_id: config.clientID,
        client_secret: config.clientSecret,
        redirect_uri: config.callbackURL
      },
      headers: {
        'Cache-Control': 'no-cache'
      }
    };

    // Execute the curl request to retrieve the token
    request(options, (err, tokenRes) => {
      if (tokenRes.body !== undefined) {
        // console.log('token res', tokenRes.body);
        tData = JSON.parse(tokenRes.body);
        if (tData.code === 403) {
          res.redirect('/invalid');
        } else {
          renderUser();
        }
      }
    });
  } else {
    res.redirect('/');
  }
};
