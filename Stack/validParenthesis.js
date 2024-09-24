// For a given string check if that string is valid in terms of parenthesis
// e.g. [()] ===> valid string==>true
// [[(]]===> invalid string

function isEmpty(stack) {
  return stack.length === 0;
}

function isValid(str) {
  const stack = [];
  for (let index = 0; index < str.length; index++) {
    const char = str[index];
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (isEmpty(stack)) {
        return false;
      }
      const top = stack.pop();
      if (
        (char == ")" && top !== "(") ||
        (char == "]" && top !== "[") ||
        (char == "}" && top !== "{")
      ) {
        return false;
      }
    }
    console.log(stack);
  }
  return isEmpty(stack);
}

console.log(isValid("[(){}]"));
