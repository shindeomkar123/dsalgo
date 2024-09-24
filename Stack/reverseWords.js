// Reverse a order of words in a sentence using stack
// sky is a blue ==> blue a is sky

function reverseWords(str) {
  const splitStr = str.split(" ");
  const stack = [...splitStr];
  let reversed = "";
  while (stack.length) {
    const word = stack.pop();
    reversed += " " + word;
  }
  return reversed.trim();
}

console.log(reverseWords("a  good exapmple is given"));
