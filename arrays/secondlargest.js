// Given a array, find second larget number

function secondLargest(arr) {
  // remove duplicate value
  const uniqueArray = Array.from(new Set(arr));
  // sort this array
  const sortedArray = uniqueArray.sort((a, b) => b - a);
  //second element would be second largest if array length is geater than 2
  if (sortedArray.length > 2) {
    return sortedArray[1];
  } else {
    return -1;
  }
}

console.log(secondLargest([3, 1, 5, 7, 4]));

//*********************************************** RECOMANDED APPROACH ************************************************************************** */

// largets=3;
// secondLargest=Number.NEGATIVE_INFINITY

// largets=3;
// secondLargest=1

// largets=5;
// secondLargest=3

// largets=7;
// secondLargest=5

// largets=7;
// secondLargest=5

function secondLarge(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largest) {
      secondLargest = largest;
      largest = arr[index];
    } else if (arr[index] > secondLargest && arr[index] !== largest) {
      secondLargest = arr[index];
    }
  }
  return secondLargest;
}

console.log(secondLarge([3, 1, 5, 7, 4]));
