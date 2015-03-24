'use strict';
var filters = require('./filters');

module.exports = function (env) {
  var embed;

  if (env) {
    // set up filters
    filters(env);
  } else {
    embed = require('byline-embed');
    env = embed.engines.nunjucks;
  }

  return env;
};