class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.length = null;
    this.tail = null;
  }

  //Push element at the end of the dll
  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }
}

const dll = new DoublyLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);

console.log(dll);
