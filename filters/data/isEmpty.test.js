'use strict';
var filterName = __filename.split('/').pop().split('.').shift(),
  filter = require('./' + filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  it('return false on empty parameters', function () {
    expect(filter()).to.be.false;
  });

  it('return false on empty string (not an object)', function () {
    expect(filter('')).to.be.false;
  });

  it('return true on empty object', function () {
    expect(filter({})).to.be.true;
  });

  it('return false on non-empty object', function () {
    expect(filter({"thing": "thing", "thing2": "thing2"})).to.be.false;
  });
});