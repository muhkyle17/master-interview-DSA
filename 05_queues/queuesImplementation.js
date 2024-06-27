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
    this.lenght = 0
  }

  peek() {}

  enqueue(value) {}

  dequeue() {}
}
