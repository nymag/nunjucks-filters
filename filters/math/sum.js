// jscs:disable disallowDanglingUnderscores
'use strict';

var _ = require('lodash');

module.exports = function (iterable, keywords) {
  var result, start, attribute;

  if (keywords && keywords.__keywords === true) {
    //if they've given us a keyword (mimicking jinja)
    attribute = keywords.attribute;
    start = keywords.start;
  }

  if (_.isArray(iterable)) {
    if (_.isString(attribute)) {
      iterable = _.pluck(iterable, attribute);
    }
    result = _.reduce(iterable, function (num, value) {
      num += value;
      return num;
    }, 0);
  } else if (_.isNumber(iterable) || _.isString(iterable)) {
    result = parseInt(iterable, 10);
  }

  if (_.isNumber(start)) {
    result += start;
  }

  return result;
};