'use strict';
// Compare two dates to the current date and return true if current date falls between the two
module.exports = function (start, stop) {
  if (!start || !stop) {
    return false;
  }
  var today = new Date();
  start = new Date(start);
  stop = new Date(stop);
  return (start < today && today < stop);
};