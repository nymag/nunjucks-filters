'use strict';
module.exports = function(str, value) {
  if (str && value) {
    return str.indexOf(value);
  } else {
    return false;
  }
};