'use strict';
var nunjucks = require('nunjucks'),
  _ = require('lodash'),
  expect = require('chai').expect,
  index = require('./');

describe('Filter: index', function () {
  it('loads', function (done) {

    var env = new nunjucks.Environment(new nunjucks.FileSystemLoader('.', true));

    index(env, function (err, envWithFilters) {
      _.each(envWithFilters.filters, function (filter) {
        expect(typeof filter).to.equal('function');
      });
      done();
    });

  });
});