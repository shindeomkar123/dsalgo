// Find subarray with largest  sum
//  [5,4,-1,7,8]==>23

function subArrSum(nums) {
  let maxSum = nums[0];
  let startIndex;
  let endIndex;
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
        startIndex = i;
        endIndex = j;
      }
    }
  }
  return nums.slice(startIndex, endIndex + 1);
}

console.log(subArrSum([1, 2, 3, 4, -23, 4, 3]));

//***********************************OPTIMIZED SOLUTION********************************* */
//*********KADENS ALGO********************************** */

function kadensAlgo(nums) {
  let max = nums[0];
  let sum = 0;
  let startIndex = 0;
  let endIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (sum > max) {
      max = sum;
      endIndex = i;
    }
    if (sum < 0) {
      sum = 0;
      startIndex = i;
    }
  }
  return nums.slice(startIndex, endIndex + 1);
}

console.log(kadensAlgo([4, -1, 2, -7, 3, 4]));
