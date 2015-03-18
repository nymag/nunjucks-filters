'use strict';
var filterName = __filename.split('/').pop().split('.').shift(),
  filter = require('./' + filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  it('return current year', function () {
    expect(filter()).to.equal(new Date().getFullYear());
  });
});