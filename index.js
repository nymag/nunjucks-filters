'use strict';

// byline-specific nunjucks filters and environment
var nunjucks = require('nunjucks'),
  _ = require('lodash'),
  filters = require('./filters');

module.exports = function (app) {
  // configure nunjucks env and add it to the express app
  var env = nunjucks.configure('layouts', {
    express: app,
    autoescape: true
  });
  // set default view engine
  app.set('view engine', 'nunjucks');

  // set up filters
  filters(env);
  
  env.addFilter('getContext', function () {
    return this.ctx;
  });
  env.addFilter('getComponent', function () {
    if (!_.isObject(this.ctx)) {
      return null;
    }

    var context = this.ctx,
      name = Object.keys(context)[0],
      data = context[name],
      component = { name: name, data: data };

    return component;
  });

  return app;
};