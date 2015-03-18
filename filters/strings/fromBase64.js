'use strict';
module.exports = function (str) {
  return !!str && new Buffer(str, 'base64').toString('utf8');
};