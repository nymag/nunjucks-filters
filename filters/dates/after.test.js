'use strict';
var filterName = __filename.split('/').pop().split('.').shift(),
  filter = require('./' + filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  var date1 = '2014-11-25T21:22:38.220Z',
    date2 = '2010-11-25T21:22:38.220Z';

  it('Handles bad input gracefully', function () {
    expect(filter()).to.equal(false);
  });

  it('Handles truth', function () {
    expect(filter(date1, date2)).to.equal(true);
  });

  it('Handles false', function () {
    expect(filter(date2, date1)).to.equal(false);
  });
});