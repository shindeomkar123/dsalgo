// Basic stack implementation

class Stack {
  constructor() {
    this.stack = [];
  }

  push(e) {
    this.stack.push(e);
  }

  pop() {
    return this.stack.pop();
  }

  size() {
    return this.stack.length;
  }

  peek() {
    return this.stack[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }
}

const stack1 = new Stack();
stack1.push(1);
stack1.push(2);
console.log(stack1.stack);
stack1.pop();
console.log(stack1.stack);
console.log(stack1.peek());
stack1.isEmpty();
stack1.size();

// Basic methods of stack:

// 1. push(e)   --->  push an element to last of the stack
// 2. pop()     --->  pop the last element of the stack
// 3. peek()    --->  this will return last element of the stack
// 4. isEmpty() --->  checks if stack is empty
// 5. size()    --->  returns the size of the stack
