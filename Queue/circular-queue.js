// Circular Queue

// 1. Size of queue is fixed
// 2. Known as Circular buffer / ring buffer
// 3. Uses empty block after dequeue operation

class CircularQueue {
  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.size;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(el) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.size; // As we are doing circular queue 5%5=0
      this.queue[this.rear] = el;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const front = this.queue[this.front];
      this.queue[this.front] = null;
      this.front = (this.front + 1) % this.size; // for circular queue implmentation
      this.currentLength--;
      return front;
    }
    this.rear = -1;
    this.front = -1;
    return null;
  }

  print() {
    console.log(this.queue);
  }
}

const queue = new CircularQueue(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.print();

queue.dequeue();

queue.print();

queue.enqueue(6);

queue.print();
