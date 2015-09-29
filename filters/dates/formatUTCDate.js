'use strict';
var moment = require('moment'),
  defaultFormat = 'M/D/YYYY [at] h:mm a',
  meridiems = /(a|p)\.?(m)\.?/i;

/**
 * formats a date with moment.js
 *
 * NOTE: Tests and functionality came from deprecated code.  New major version should clean this up.
 *
 * @param  {string|Date} date
 * @param {string} [format]
 * @param {bool} [useDots] true to use dots for meridiems, e.g. a.m. rather than am
 * @return {string}
 */
module.exports = function (date) {
  var format, useDots;

  // parse all possible arguments
  if (arguments.length === 3) {
    format = arguments[1];
    useDots = arguments[2];
  } else if (arguments.length === 2 && typeof arguments[1] === 'boolean') {
    format = defaultFormat;
    useDots = arguments[1];
  } else if (arguments.length === 2 && typeof arguments[1] === 'string') {
    format = arguments[1];
    useDots = false;
  } else {
    format = defaultFormat;
    useDots = false;
  }

  if (useDots) {
    return moment.utc(date).format(format).replace(meridiems, '$1.$2.');
  } else {
    return moment.utc(date).format(format);
  }
};