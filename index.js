'use strict';

var embed = require('byline-embed'),
  filters = require('./filters'),
  env = embed.engines.nunjucks;

// set up filters
filters(env);

module.exports = env;