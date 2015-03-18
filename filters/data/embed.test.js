'use strict';

var filterName = __filename.split('/').pop().split('.').shift(),
  filter = require('./' + filterName),
  expect = require('chai').expect,
  nunjucks = require('nunjucks'),
  fakeTemplateWithoutData = 'Fake T3mpl4te',
  fakeTemplateWithData = 'Fake T3mpl4te {{ thing }}',
  fakeTemplateWithDataAndComponentSettings = 'Fake T3mpl4te {{ componentSettings.thing }}',
  fakeTemplateData = {thing: 'stuff!'},
  fakeTemplateWithDataRendered = 'Fake T3mpl4te stuff!',
  MockLoader;

MockLoader = nunjucks.Loader.extend({
  init: function () {},
  async: false,
  getSource: function (name) {
    if (name.indexOf('withDataAndComponentSettings') !== -1) {
      return {src: fakeTemplateWithDataAndComponentSettings};
    } else if (name.indexOf('withData') !== -1) {
      return {src: fakeTemplateWithData};
    } else {
      return {src: fakeTemplateWithoutData};
    }
  }
});

describe('Filters: ' + filterName, function () {
  var env;

  before(function () {
    //NOTE:  Nunjucks is REALLY slow when starting up, so to prevent everyone having to wait for it whenever they run
    // tests, we'll only be testing using a single copy.  Just a warning.
    nunjucks.configure('views', {
      watch: false
    });
    env = new nunjucks.Environment(new MockLoader());
  });

  it('Handles missing name by returning emptystring', function () {
    var result = filter.call(env, undefined, undefined, undefined);
    expect(result).to.equal('');
  });

  it('Renders template with empty data', function () {
    var result = filter.call(env, undefined, 'jfklda', undefined);
    expect(result).to.equal(fakeTemplateWithoutData);
  });

  it('Return data in template when piped from calling template', function () {
    var result = filter.call(env, fakeTemplateData, 'withData', {});
    expect(result).to.equal(fakeTemplateWithDataRendered);
  });

  it('Return data in template when given from extraData parameter', function () {
    var result = filter.call(env, {}, 'withData', fakeTemplateData);
    expect(result).to.equal(fakeTemplateWithDataRendered);
  });

  it('Data piped from parent has higher priority than extra parameters', function () {
    var result = filter.call(env, fakeTemplateData, 'withData', { thing: 'defaults'});
    expect(result).to.equal(fakeTemplateWithDataRendered);
  });

  it('Full test from within nunjucks, data passed from parent', function () {
    var template = 'start {{ {thing: "fakeData"} | embed("withData") }}',
      result;

    env.addFilter('embed', filter.bind(env));
    result = env.renderString(template);
    expect(result).to.equal('start Fake T3mpl4te fakeData');
  });

  it('Full test from within nunjucks, empty passed from parent and data passed as default', function () {
    var template = 'start {{ {} | embed("withData", {thing: "fakeData"}) }}',
      result;

    env.addFilter('embed', filter.bind(env));
    result = env.renderString(template);
    expect(result).to.equal('start Fake T3mpl4te fakeData');
  });

  it('Full test from within nunjucks, data from parent wins', function () {
    var template = 'start {{ {thing: "fakeData"} | embed("withData", {thing: "not shown"}) }}',
      result;

    env.addFilter('embed', filter.bind(env));
    result = env.renderString(template);
    expect(result).to.equal('start Fake T3mpl4te fakeData');
  });

  it('Full test from within nunjucks, using extraData', function () {
    var template = 'start {{ {} | embed("withData", {thing: "is shown"}) }}',
      result;

    env.addFilter('embed', filter.bind(env));
    result = env.renderString(template);
    expect(result).to.equal('start Fake T3mpl4te is shown');
  });
});
