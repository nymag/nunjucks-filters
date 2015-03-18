'use strict';
var nunjucks = require('nunjucks'),
  env = new nunjucks.Environment(new nunjucks.FileSystemLoader('.', true)),
  filterName = __filename.split('/').pop().split('.').shift(),
  filter = require('./' + filterName).bind(env),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  it('return undefined on empty', function () {
    expect(filter()).to.be.undefined;
  });

  it('return empty string on empty string', function () {
    expect(filter('')).to.equal('');
  });

  it('return string on string', function () {
    expect(filter('thing')).to.equal('thing');
  });

  it('return truncated string on string and length', function () {
    expect(filter('thing', 3)).to.equal('thi...');
  });
});