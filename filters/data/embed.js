'use strict';

var _ = require('lodash'),
  bylineEmbed = require('byline-embed');

/**
 * Tries to embed another template into this template, maybe using its server.js transform function
 * @param {{}} data
 * @param {string} name
 * @param {{}} [extraData]
 */
module.exports = function (data, name, extraData) {
  if (!_.isString(name)) {
    return '';
  }

  data = data || {};

  // Add extra data.
  if (_.isObject(extraData)) {
    data = _.cloneDeep(data); // cloneDeep is necessary for embeds within for loops that have extraData.
    _.defaults(data, extraData);
  }

  return bylineEmbed.render(name, data);
};