'use strict';
var filterName = __filename.split('/').pop().split('.').shift(),
  filter = require('./' + filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  it('return false on empty', function () {
    expect(filter()).to.be.falsy;
  });

  it('return item on match', function () {
    expect(filter('a-gray-fox-leaped')).to.equal('aGrayFoxLeaped');
  });
});