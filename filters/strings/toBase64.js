'use strict';
module.exports = function (str) {
  return !!str && new Buffer(str, 'utf8').toString('base64');
};