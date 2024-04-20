class Queue {
  constructor() {
    this.queue = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(el) {
    this.queue[this.rear] = el;
    this.rear++;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  dequeue() {
    const front = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return front;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    console.log(this.queue);
  }
}

const newQueue = new Queue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.print();
newQueue.dequeue();
newQueue.dequeue();
console.log(newQueue.front, newQueue.rear);
console.log(newQueue.isEmpty());
