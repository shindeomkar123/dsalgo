// Remove duplicates from the array and return length of array
// Array to be sorted
// sequence should remain as it is

function removeDuplicates(array) {
  for (let index = 0; index < array.length - 1; index++) {
    console.log("index===>", index);
    if (array[index] === array[index + 1]) {
      array.splice(index + 1, 1);
      index--;
    }
  }
  return array.length;
}

//console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 5, 6, 6]));
//[1, 2, 3, 4, 5, 6, 6]
//Time complexity = O(n)

//******************************RECOMANDED APPROACH ***************************/

function removeDuplicatesNew(array) {
  let i = 0;
  for (let j = 0; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}

console.log(removeDuplicatesNew([1, 1, 2, 2, 3, 4, 5, 6, 6]));
//[1, 1, 2, 2, 3, 4, 5, 6, 6]
//[1, 2, 2, 2, 3, 4, 5, 6, 6]
//[1, 2, 3, 2, 3, 4, 5, 6, 6]
//[1, 2, 3, 4, 5, 4, 5, 6, 6]

// i=5;
// j=6
