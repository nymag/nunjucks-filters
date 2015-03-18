'use strict';
module.exports = function (str) {
  return !!str && str.replace(/[A-Z]/g, function ($1) { return '-' + $1.toLowerCase(); });
};