'use strict';
var exists = require('fs').existsSync;

module.exports = function (path) {
  return exists(path);
};