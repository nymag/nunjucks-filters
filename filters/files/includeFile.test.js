'use strict';
var filterName = __filename.split('/').pop().split('.').shift(),
  filter = require('./' + filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  it('return false on empty', function () {
    expect(filter()).to.be.falsy;
  });

  it('return object with toString method', function () {
    expect(filter('test/mocha.opts').toString).to.be.instanceof(Function);
  });
});
