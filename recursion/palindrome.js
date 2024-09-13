// Check if number is palindrome or not
// e.g 101==>true
//3434 = false

// function panlindrome(num) {
//   num = num + "";
//   for (let index = 0; index < num.length / 2; index++) {
//     if (num[index] !== num[num.length - 1 - index]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(panlindrome(4321234));

function palindromeWithRecursion(num) {
  num = num + "";
  if (num.length === 1) return true;
  if (num[0] !== num[num.length - 1]) return false;
  return palindromeWithRecursion(num.slice(1, num.length - 1));
}

console.log(palindromeWithRecursion(12343241));
