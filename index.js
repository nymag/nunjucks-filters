'use strict';

// byline-specific nunjucks filters and environment
var nunjucks = require('nunjucks'),
  filters = require('./filters'),
  env = nunjucks.configure('.', {
    autoescape: true
  });

// set up filters
filters(env);

module.exports = env;