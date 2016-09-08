'use strict';
var _ = require('lodash');

module.exports = function () {
  var arrayLike = _.pickBy(this.ctx, function (val, key) {
    return !isNaN(parseInt(key));
  });

  // in nunjucks v2.x, this.ctx is an object
  // grab the numbered keys and put them back into an array
  return _.values(arrayLike);
};
