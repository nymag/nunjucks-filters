'use strict';
var filterName = __filename.split('/').pop().split('.').shift(),
  filter = require('./' + filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  it('return undefined on empty', function () {
    expect(filter()).to.be.undefined;
  });

  it('return 100k on 100000', function () {
    expect(filter(100000)).to.equal('100k');
  });
});