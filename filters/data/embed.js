'use strict';

var nunjucks = require('nunjucks'),
  _ = require('lodash'),
  path = require('path'),
  cwd = process.cwd(),
  components = cwd + '/components';

/**
 * The env could come from multiple sources
 * @param obj
 * @returns {{}}
 */
function getEnv(obj) {
  var env;
  if (obj instanceof nunjucks.Environment) {
    env = obj;
  } else if (global.env instanceof nunjucks.Environment) {
    env = global.env;
  }
  return env;
}

/**
 * Embed a component, translating using server.js if available
 * @param {{}} data
 * @param {string} name
 * @param {{}} env
 */
function embed(data, name, env) {
  if (name.indexOf('template.nunjucks') !== -1) {
    throw new Error('what');
  }
  var templatePath = [components, name, 'template.nunjucks'].join(path.sep);
  return env.render(templatePath, data);
}

/**
 * Tries to embed another template into this template, maybe using its server.js transform function
 * @param {{}} data
 * @param {string} name
 * @param {{}} [extraData]
 */
module.exports = function (data, name, extraData) {
  var env;

  if (!_.isString(name)) {
    return '';
  }

  data = data || {};

  // Add extra data.
  if (_.isObject(extraData)) {
    data = _.cloneDeep(data); // cloneDeep is necessary for embeds within for loops that have extraData.
    _.defaults(data, extraData);
  }

  env = getEnv(this);

  return embed(data, name, env);
};