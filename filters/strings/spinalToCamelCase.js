'use strict';
module.exports = function (str) {
  return !!str && str.replace(/\-([a-z])/g, function (match, $1) { return $1.toUpperCase(); });
};