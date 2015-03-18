'use strict';
var filterName = __filename.split('/').pop().split('.').shift(),
  filter = require('./' + filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  it('return false on empty', function () {
    expect(filter()).to.be.falsy;
  });

  it('return everything before dash', function () {
    expect(filter('thing-thing')).to.equal('thing');
  });
});