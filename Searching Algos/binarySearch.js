// NOTE : Before start of binary search algo , check if array is sorted or not
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) return mid;
    if (target > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(binarySearch([2, 4, 5, 1], 4));
