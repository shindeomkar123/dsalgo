// Basic queue implementation

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(e) {
    this.queue.push(e);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Cannot dequeue element....");
      return;
    }
    return this.queue.shift();
  }

  size() {
    return this.queue.length;
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.size() === 0;
  }
}

const queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.dequeue();
console.log(queue1.size());
console.log(queue1.queue);
console.log(queue1.peek());
queue1.isEmpty();
queue1.size();

// Basic methods of queue:
// FIFO
// 1. enqueue(e)   --->  push an element to last of the queue
// 2. dequeue()    --->  returns the first element of the queue
// 3. peek()       --->  this will return first element of the queue
// 4. isEmpty()    --->  checks if queue is empty
// 5. size()       --->  returns the size of the queue
