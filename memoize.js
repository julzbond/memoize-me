module.exports = {
  memoizeElement: memoizeElement(),
  memoizeQuery: memoizeQuery()
};

function memoizeElement () {
  var cache = {};
  return function (id) {
    if (!(id in cache)) {
      return cache[id] = document.getElementById(id);
    }
    return cache[id];
  };
}

function memoizeQuery () {
  var cache = {};
  return function(sel) {
    if(!(sel in cache)) {
      return cache[sel] = document.querySelector(sel);
    }
    return cache[sel];
  };
}