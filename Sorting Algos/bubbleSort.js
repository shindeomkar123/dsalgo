const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let isSwapped = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    // If no element swapped in this interation just break the loop
    if (!isSwapped) {
      break;
    }
  }
  return arr;
};

console.log(bubbleSort([11, 3, 4, 2, 5]));
