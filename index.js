'use strict';
var filters = require('./filters'),
  nunjucks = require('nunjucks');

module.exports = function (env) {
  if (!env) {
    // instantiate a new nunjucks environment
    env = nunjucks.configure('.');
  }

  // set up filters
  filters(env);

  return env;
};
