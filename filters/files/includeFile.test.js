var filterName = __filename.split('/').pop().split('.').shift(),
  filter = require('./' + filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  it('return emptystring on empty', function () {
    expect(filter()).to.equal('');
  });

  it('return buffer with toString method', function () {
    expect(filter('test/mocha.opts').toString).to.be.instanceof(Function);
  });

  it('return emptystring on error', function () {
    expect(filter('not/a/path/to/any/file')).to.equal('');
  });
});
