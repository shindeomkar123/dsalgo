// Get factorial of a number using recursion
//e.g.  5! =====>  5*4*3*2*1  ==> 120
// FYI  0!=1,1!=1

function factorial(num) {
  console.log(num);
  if (num === 0) return 1;
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

//5*factorial(4)
//5*4*factorial(3)
//5*4*3*factorial(2)
//5*4*3*2*factorial(1)
///5*4*3*2*1*  factorial(0)==1

console.log(factorial(5));
