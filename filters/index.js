const glob = require('glob'),
  _ = require('lodash');

function isFilter(path) {
  return !_.includes(path, '.test.js') && !_.includes(path, 'index.js');
}

function getNameFromPath(path) {
  return path.split('/').pop().split('.').shift();
}

module.exports = function (env, cb) {
  // options is optional
  glob('./**/*.js', { cwd: __dirname }, function (err, files) {
    if (err) {
      console.error(err.message, err.stack);
    }

    _.each(_.filter(files, isFilter), function (file) {
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
