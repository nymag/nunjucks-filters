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

      if (_.isFunction(filter)) {
        env.addFilter(getNameFromPath(file), filter);
      }
    });

    // used for testing
    if (cb) {
      cb(null, env);
    }
  });
};
