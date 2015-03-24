# byline-nunjucks

[![Build Status](https://travis-ci.org/nymag/byline-nunjucks.svg)](https://travis-ci.org/nymag/byline-nunjucks)
[![Code Climate](https://codeclimate.com/github/nymag/byline-nunjucks/badges/gpa.svg)](https://codeclimate.com/github/nymag/byline-nunjucks)

Nunjucks environment and filters

# Installation

```
npm install --save byline-nunjucks
```

# Usage

Simply require it in your `app.js` file

```js
var app = require('express')(),
  nunjucks = require('byline-nunjucks')();

app.engine('nunjucks', nunjucks);
```

## Preserving the environment

If you want to preserve your nunjucks environment, you can pass it through

```js
var nunjucks = require('byline-nunjucks')(env);
```

## Custom Filters

Byline-nunjucks returns its nunjucks environment, so you can easily add your own filters and globals.

```js
var env = require('byline-nunjucks');

// add a filter
env.addFilter('emoji', function () {
  return '(⌐■_■)';
});

// add a global
env.addGlobal('coolDude', 'Nelson Pecora');
```