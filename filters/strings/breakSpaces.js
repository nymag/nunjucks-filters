'use strict';
module.exports = function (str) {
  return str && str.replace(/\s/g, ' '); // convert &nbsp; into actual, regular, freedom-loving spaces
};