'use strict';
module.exports = function(x) {
  if (x) {
    return x.replace(/(<([^>]+)>)/ig, '');
  } else {
    return false;
  }
};
