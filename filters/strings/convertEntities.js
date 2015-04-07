'use strict';
var he = require('he'),
  _ = require('lodash');

module.exports = function (entities) {
  if (typeof entities === 'undefined') {
    return entities;
  } else {
    entities = entities.val || entities;
  }

  if (_.isString(entities) || entities.length <= 0) {
    return he.decode(entities);
  } else {
    return entities;
  }
};