'use strict';
module.exports = function(obj) {
  return typeof obj === 'object' && Object.keys(obj).length === 0;
};