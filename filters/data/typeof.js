'use strict';
// Nunjucks Filter: Return typeof.
module.exports = function (value) {
  // better typeof checking, by Crockford
  var s = typeof value;

  if (s === 'object') {
    if (value) {
      if (value instanceof Array) {
        s = 'array';
      }
    } else {
      s = 'null';
    }
  }
  return s;
};