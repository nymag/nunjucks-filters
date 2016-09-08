var fs = require('fs');

module.exports = function (path) {
  try {
    return fs.readFileSync(path).toString();
  } catch (e) {
    return '';
  }
};
