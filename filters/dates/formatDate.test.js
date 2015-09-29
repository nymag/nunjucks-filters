'use strict';
var filterName = __filename.split('/').pop().split('.').shift(),
  filter = require('./' + filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  var date = '2015-04-30T14:31:00.000Z';

  it('uses formatUTCDate', function () {
    expect(filter(date)).to.equal('4/30/2015 at 2:31 pm');
  });
});