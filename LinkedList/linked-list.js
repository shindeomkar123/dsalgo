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

  // get element
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      // traverse to the next node
      current = current.next;
      counter++;
    }
    return current;
  }

  //insert element at specific index
  insert(index, value) {
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    if (index < 0 || index > this.length) return false;

    var newNode = new Node(value);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  //remove at specific index
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length) return this.pop();
    if (index === 0) return this.shift();

    var prev = this.get(index - 1);
    var removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var prev = null;
    var next;
    for (let index = 0; index < this.length; index++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    for (let index = 0; index < this.length; index++) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();

list.push(1);
list.push(13);
// list.pop();
// list.pop();

// console.log(list);
// list.push(11);
// list.push(23);
// console.log("=========================****===================");
// list.unshift(4);
// list.shift();
list.push(2);
list.push(5);
list.print();

list.reverse();
list.print();
// console.log("get value", list.get(2));

//console.log(list.remove(1));
