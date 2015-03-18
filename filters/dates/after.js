'use strict';

module.exports = function (dateStr, afterDateStr) {
  return Date.parse(dateStr) > Date.parse(afterDateStr);
};
