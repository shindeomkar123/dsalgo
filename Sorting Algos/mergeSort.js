const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    }
  }
  //Add remaining items in the array
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  return result;
};

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  //left array
  let left = mergeSort(arr.slice(0, mid));

  //right array
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([2, 1, 3, 7, 4, 9, 0]));
