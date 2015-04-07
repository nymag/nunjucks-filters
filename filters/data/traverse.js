'use strict';
var traverse = require('traverse');

// Nunjucks Filter: Traverse to any child leaf by name.
module.exports = function (json, component) {
  var results = traverse(json).reduce(function (acc, x) {
    if (this.key === component) {
      acc.push(x);
    }
    return acc;
  }, []);

  return results[0];
};