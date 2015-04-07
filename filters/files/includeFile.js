'use strict';
var fs = require('fs');

module.exports = function (path) {
  if (fs.existsSync(path)) {
    return fs.readFileSync(path);
  } else {
    return '';
  }
};