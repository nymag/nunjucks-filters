'use strict';
// Nunjucks Filter: Convert 1000 to 1k.
module.exports = function (x) {
  var currentNumber = parseInt(x, 10); // always specify radix with arbitrary input

  if (isNaN(currentNumber)) {
    return x;
  } else if (currentNumber > 999) {
    var kResult = (currentNumber / 1000).toFixed(1);

    if (parseFloat(kResult) === parseInt(kResult, 10)) {
      return parseInt(kResult, 10) + 'k';
    } else {
      return kResult + 'k';
    }
  } else {
    return x;
  }
};