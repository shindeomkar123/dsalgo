//Calculate sum of elemnts in the array using recursion

function recursionSum(arr) {
  if (arr.length === 0) return 0;
  return arr[arr.length - 1] + recursionSum(arr.slice(0, arr.length - 1));
}

console.log(recursionSum([1, 2, 3, 4, 5, 6]));

// same you can do with  multiply
