# byline-nunjucks

Nunjucks environment and filters

# Installation

```
npm install --save byline-nunjucks
```

# Usage

Simply require it in your `app.js` file and pass an express app into it!

```js
var app = require('express')(),
  nunjucks = require('byline-nunjucks');

nunjucks(app);
```

It'll configure nunjucks to template anything in the `layouts` folder when you call `res.render('template-name', data)`.

## Custom Filters

Byline-nunjucks returns its nunjucks environment, so you can easily add your own filters and globals.

```js
var env = require('byline-nunjucks')(app);

// add a filter
env.addFilter('emoji', function () {
  return '(⌐■_■)';
});

// add a global
env.addGlobal('coolDude', 'Nelson Pecora');
```