var fs = require('fs');

module.exports = function (path) {
  try {
    return fs.readFileSync(path);
  } catch (e) {
    return '';
  }
};
