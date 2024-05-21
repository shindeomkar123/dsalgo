//output : [1,2,3,4,5,6,7]
var result = [];
const arr = flattenedArr([1, 2, [3, 4, [5, 6, 7]], 8]);

function flattenedArr(arr) {
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      return flattenedArr(el);
    } else {
      result.push(el);
    }
  });
  return result;
}

console.log(arr);
