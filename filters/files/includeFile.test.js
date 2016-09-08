var filterName = __filename.split('/').pop().split('.').shift(),
  filter = require('./' + filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function () {
  it('returns emptystring on empty', function () {
    expect(filter()).to.equal('');
  });

  it('returns emptystring on error', function () {
    expect(filter('not/a/path/to/any/file')).to.equal('');
  });

  it('returns string', function () {
    expect(filter('test/mocha.opts')).to.equal('--reporter dot\n--ui bdd\n--recursive\nfilters/**/*.js');
  });
});
