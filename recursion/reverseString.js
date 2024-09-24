//Reverse a string
//e.g. hello ===> olleh

function reverseString(str) {
  let newStr = "";
  for (let index = str.length - 1; index >= 0; index--) {
    newStr = newStr + str[index];
  }
  return newStr;
}

//console.log(reverseString("hello"));

function reverseByRecusrion(str) {
  console.log(str);
  if (str.length <= 1) return str;
  return str[str.length - 1] + reverseByRecusrion(str.slice(0, -1));
}

console.log(reverseByRecusrion("hello"));
