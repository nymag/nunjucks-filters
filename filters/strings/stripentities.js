'use strict';
module.exports = function (x) {
  if (x) {
    return x.replace(/&#[0-9]+;/ig,  '');
  } else {
    return false;
  }
};