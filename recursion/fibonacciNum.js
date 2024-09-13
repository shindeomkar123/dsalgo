// Find a number from Fibonacci series at given index
//[0,1,1,2,3,5,8,13....] = fibbo(5)==>5

function fib(num) {
  let arr = [0, 1];
  for (let index = 2; index <= num; index++) {
    arr.push(arr[index - 1] + arr[index - 2]);
  }
  return arr[num];
}

console.log(fib(5));

function fiboWithRecursion(num) {
  if (num <= 1) return num;
  return fiboWithRecursion(num - 1) + fiboWithRecursion(num - 2);
}

console.log(fiboWithRecursion(5));

// fiboWithRecursion(4)+fiboWithRecursion(3)
// fiboWithRecursion(3)+fiboWithRecursion(2)+fiboWithRecursion(2)+fiboWithRecursion(1)
// fiboWithRecursion(2)+fiboWithRecursion(1)+fiboWithRecursion(2)+fiboWithRecursion(1)+fiboWithRecursion(0)+1
// 1+1+1+1+1==>5
