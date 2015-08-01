module.exports = {
  memoizeElement: memoizeElement()
};

function memoizeElement (id) {
  var cache = {};
  return function (id) {
    if (!(id in cache)) {
      return cache[id] = document.getElementById(id);
    }
    return cache[id];
  };
}