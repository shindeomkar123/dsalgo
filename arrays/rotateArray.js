// ROtate array by  k  times , where k is positive number

function rotateArray(arr, k) {
  const size = arr.length;
  if (k > size) {
    k = k % size;
  }
  const rotated = arr.splice(size - k, size);
  arr.unshift(...rotated);
  return arr;
}

const result = rotateArray([1, 2, 3, 4, 5], 2);

//************************RECOMMANDED APPROACH******************************************************************* */
//k=2
//[1,2,3,4,5,6,7]===>[7,6,5,4,3,2,1]==>[6,7,5,4,3,2,1]===>[6,7,1,2,3,4,5]
// this will reverse the array
function reverse(num, start, end) {
  while (start < end) {
    let temp;
    temp = num[start];
    num[start] = num[end];
    num[end] = temp;
    start++;
    end--;
  }
  return num;
}

function rotate(arr, k) {
  if (k > arr.length) {
    k = k % arr.length;
  }
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  return arr;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 4));
