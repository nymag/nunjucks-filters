'use strict';
var _ = require('lodash');

module.exports = function () {
  if (!_.isObject(this.ctx)) {
    return null;
  }

  var context = this.ctx,
    name = Object.keys(context)[0],
    data = context[name],
    component = { name: name, data: data };

  return component;
};