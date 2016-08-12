'use strict';

var _ = require('lodash');

module.exports = function (components, limit) {
  var limitReached = false,
    allowedCount = 0;

  return _.filter(components, function (item) {
    if (item.displaySelf && !limitReached) {
      allowedCount++;

      if (limit && allowedCount === limit) {
        limitReached = true;
      }

      return item;
    }
  });
};
