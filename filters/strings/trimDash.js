'use strict';
// Nunjucks Filter: Trim final dash.
module.exports = function(x) {
  return x && x.split('-')[0];
};