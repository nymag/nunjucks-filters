module.exports = function(x) {
    if (x) {
      return x.replace(/(<a ([^>]+)>)/ig, '').replace(/(<\/a>)/ig, '');
    } else {
      return false;
    }
};