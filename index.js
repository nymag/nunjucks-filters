'use strict';

// byline-specific nunjucks filters and environment
var nunjucks = require('nunjucks'),
  filters = require('./filters');

module.exports = function () {
  // configure nunjucks env and add it to the express app
  var env = nunjucks.configure('.', {
    autoescape: true
  });

  // set up filters
  filters(env);

  return env;
};