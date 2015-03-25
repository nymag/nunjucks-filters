# nunjucks-filters

[![Build Status](https://travis-ci.org/nymag/nunjucks-filters.svg)](https://travis-ci.org/nymag/nunjucks-filters)
[![Code Climate](https://codeclimate.com/github/nymag/nunjucks-filters/badges/gpa.svg)](https://codeclimate.com/github/nymag/nunjucks-filters)

Nunjucks environment and filters

# Installation

```
npm install --save nunjucks-filters
```

# Usage

Simply require it in your `app.js` file

```js
var app = require('express')(),
  nunjucks = require('nunjucks-filters')();

app.engine('nunjucks', nunjucks);
```

## Passing env in

If you want to configure and use your own nunjucks environment, you can pass it through

```js
var nunjucks = require('nunjucks'),
  env = nunjucks.configure('.', { custom: 'options' }),
  filters = require('nunjucks-filters');

filters(env);
```

## Getting env out

Nunjucks-filters returns its nunjucks environment (including any env passed into it), so you can easily add your own filters and globals.

```js
var env = require('nunjucks-filters')();

// add a filter
env.addFilter('emoji', function () {
  return '(⌐■_■)';
});

// add a global
env.addGlobal('coolDude', 'Nelson Pecora');
```