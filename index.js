'use strict';

// byline-specific nunjucks filters and environment
var nunjucks = require('nunjucks'),
  filters = require('./filters');

module.exports = function (app) {
  // configure nunjucks env and add it to the express app
  var env = nunjucks.configure('.', {
    express: app,
    autoescape: true
  });

  // set up filters
  filters(env);

  return env;
};