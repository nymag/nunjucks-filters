'use strict';
var filterName = __filename.split('/').pop().split('.').shift(),
  filter = require('./' + filterName),
  expect = require('chai').expect;

describe('Filters: ' + filterName, function() {
  var components = [{
      _ref: 'someRef1',
      data: 'Some Data',
      displaySelf: false
    }, {
      _ref: 'someRef2',
      data: 'Some Data',
      displaySelf: true
    }, {
      _ref: 'someRef3',
      data: 'Some Data',
      displaySelf: true
    }],
    limitOneComponent = [{
      _ref: 'someRef2',
      data: 'Some Data',
      displaySelf: true
    }],
    limitTwoComponents = [{
      _ref: 'someRef2',
      data: 'Some Data',
      displaySelf: true
    }, {
      _ref: 'someRef3',
      data: 'Some Data',
      displaySelf: true
    }];

  it('It filters out all but the first true component', function() {
    expect(filter(components, 1)).to.deep.equal(limitOneComponent);
  });

  it('Limits determine how many components to display', function() {
    expect(filter(components, 2)).to.deep.equal(limitTwoComponents);
  });

  it('If no limit is assigned then it will return all components with the `displaySelf` property set to true', function() {
    expect(filter(components)).to.deep.equal(limitTwoComponents);
  });
});
