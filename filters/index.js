'use strict';
var glob = require('glob'),
  _ = require('lodash');

function getNameFromPath(path) {
  return path.split('/').pop().split('.').shift();
}

module.exports = function (env, cb) {
  // options is optional
  glob('./**/*.js', { cwd: __dirname }, function (err, files) {
    _.each(_.filter(files, function (file) { return file.indexOf('.test.js') === -1; }), function (file) {
      var filter = require(file);

      if (_.contains(file, 'embed.js')) {
        // embed filter needs the env passed into it
        env.addFilter(getNameFromPath(file), filter.bind(env));
      } else if (_.isFunction(filter)) {
        // otherwise pass the context into it
        env.addFilter(getNameFromPath(file), filter);
      }
    });

    // used for testing
    if (cb) {
      cb(null, env);
    }
  });
};
