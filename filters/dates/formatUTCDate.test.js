'use strict';
var filterName = __filename.split('/').pop().split('.').shift(),
  filter = require('./' + filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  var date = '2015-04-30T14:31:00.000Z';

  it('formats with default format', function () {
    expect(filter(date)).to.equal('4/30/2015 at 2:31 pm');
  });

  it('formats with custom date format', function () {
    expect(filter(date, 'MMMM D, YYYY')).to.equal('April 30, 2015');
  });

  it('formats with custom time format', function () {
    expect(filter(date, 'h:mm a')).to.equal('2:31 pm');
  });

  it('formats with dots', function () {
    expect(filter(date, true)).to.equal('4/30/2015 at 2:31 p.m.');
  });

  it('formats with dots and custom format', function () {
    expect(filter(date, 'h:mm a', true)).to.equal('2:31 p.m.');
  });
});