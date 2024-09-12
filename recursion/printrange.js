// Get array of numbers from the given start and end index

// startIndex = 1, endIndex = 10;===> [1,2,3,4,5,6,7,8,9,10];

// for (let index =startIndex; index <= endIndex; index++) {
// array.push(index)
// }.

var array = [];
function rangeWithRecursion(startIndex, endIndex) {
  if (startIndex <= endIndex) {
    array.push(startIndex);
    return rangeWithRecursion(startIndex + 1, endIndex);
  } else {
    return array;
  }
}

console.log(rangeWithRecursion(5, 15));
