//memoize function

var add = (a, b) => a + b;

var memoizeAdd = memoizeOne(add);

memoizeAdd(2, 3);
memoizeAdd(2, 3);

function memoizeOne(fn) {
  const cache = {};
  return function (a, b) {
    const args = `${a},${b}`;
    console.log(args);
    if (!cache[args]) {
      console.log("calculating result....");
      let result = fn(a, b);
      cache[args] = result;
      return result;
    } else {
      console.log("fetching from cache.....");

      return cache[args];
    }
  };
}
