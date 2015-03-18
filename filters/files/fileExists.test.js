'use strict';
var filterName = __filename.split('/').pop().split('.').shift(),
  filter = require('./' + filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  it('returns false on empty', function () {
    expect(filter()).to.be.falsy;
  });

  it('returns true if file exists', function () {
    expect(filter('test/mocha.opts')).to.equal(true);
  });

  it('returns false if file doesn\'t exist', function () {
    expect(filter('test/fixtures/dev/null')).to.equal(false);
  });
});