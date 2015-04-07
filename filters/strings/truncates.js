'use strict';
// Nunjucks Filter: Truncation with kill word support.
module.exports = function (input, length, killwords, end) {
  // Null check needed for chaining
  if (input) {
    // Get original nunjucks filter
    var truncate = this.getFilter('truncate');
    return truncate(input, length, killwords, end);
  } else {
    return input;
  }
};