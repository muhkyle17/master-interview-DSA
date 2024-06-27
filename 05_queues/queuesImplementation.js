// queues implementation

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.late = null
    this.length = 0
  }

  peek() {
    return this.top
  }

  enqueue(value) {}

  dequeue() {}
}

const myQueue = new Queue()
console.log(myQueue.peek(), 'peek')

// Joy
// Matt
// Pavel
// Samir
