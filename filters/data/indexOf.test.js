'use strict';
var filterName = __filename.split('/').pop().split('.').shift(),
  filter = require('./' + filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  it('return false on empty', function () {
    expect(filter()).to.be.falsy;
  });

  it('return index of item on match', function () {
    var arr = ["test"],
      item = "test";
    expect(filter(arr, item)).to.equal(0);
  });
});