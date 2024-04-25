// Node -->
//     Value
//     pointer to next Node

// You can traverse only in the one direction
// Does not have indices
// Having Head and Tail nodes
// Pointer of Tail is null

//Create a node

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// Singly Likded List

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.length) return;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      //here newTail refers to previous node then we update current node
      newTail = current;
      current = current.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return this.head;
    }
    return current;
  }

  // Add element to the head position
  unshift(value) {
    const newHead = new Node(value);
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
      this.length++;
      return;
    }
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
  }

  // Remove head

  shift() {
    if (!this.head) return;
    if (this.length === 1) {
      const head = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return head;
    }
    const prevHead = this.head;
    const newHead = prevHead.next;
    this.head = newHead;
    this.length--;
    return prevHead;
  }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(13);
list.pop();
list.pop();

console.log(list);
list.push(11);
list.push(23);
console.log("=========================****===================");
list.unshift(4);
list.shift();
console.log(list);
