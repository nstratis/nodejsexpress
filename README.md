################################################################
# AV Digital Media Ltd. Example NodeJS/Express/Passport/oAuth Mini App
*(c) AV Digital Media Ltd. All Rights Reserved.*
################################################################

This is a simple express application for utilizing oAuth2 and passport for
communicating with a 3rd Party API

The folder structure is as follows:

/auth - The oAuth passport folder containing the simple passport configuration<br />
/config - Simple config file with oAuth credentials<br />
/controllers - 2 Controllers for the Index and User Details pages<br />
/public - The public directory with all public files<br />
/views - The handlebars view files<br />

# How to initialize

1. CD to download directory
2. node install
3. node server.js
4. Run from http://localhost:3000

# Server Framework

This sample application uses "express" as the core framework for development
structuring the application in a typical MVC style architecture however there
are no real "models".

# Config
The oAuth Configuration details are stored in the private/config/config.js file.

# Controllers
There are 2 view rendering controller within the private/controllers folder allowing
the index and the userdetails pages to be rendered.

# Views
The views are generated using HandleBars

# Custom jQuery Plugin

Within the public/js folder resides a custom jQuery plugin which for the purpose
of demonstration simple fades in the userdetails row groups with a delay.

# Responsive Template

Did not see the point of cluttering with a framework such as bootstrap. The SASS
and responsive nature has been custom written.
public/sass

The SASS would be compiled using assuming SASS has been installed on your system:
sass public/sass/def_app.scss public/css/app-default.css

If using a SASS node_module this would need to be added to the package list.


# Unit Testing

Two unit testing examples have been included, one for the server using "mocha"
to test the node and express framework, only a rudimentary example.

Execute in the console
./node_modules/.bin/mocha -R spec testrunner.js


The other is using QUnit in the public folder to run a simple test on the
custom jQuery component. This will run in a browser navigate to:
public/unittests/testrunner.html
