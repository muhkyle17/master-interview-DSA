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
    this.last = null
    this.length = 0
  }

  peek() {
    return this.top
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode

      // On enqueue with length of 0, this.first and this.last are assigned the same object. They are now linked by reference.
      // On enqueue with length of 1, they are pointing to the same object that's why when this.last.next = newNode is performed, it also changes this.first.next by reference. On the line this.last = newNode, this overwrites the previous assignment for this.last and thus breaks the link.
    }
    this.length++
    return this
  }

  dequeue() {
    if (!this.first) {
      return null
    }

    if (this.first === this.last) {
      this.last = null
    }
    const holdingPointer = this.first
    this.first = this.first.next
    this.length--
    // return holdingPointer;
    return this
  }
}

const myQueue = new Queue()
const queueJoy = myQueue.enqueue('Joy')
const queueMatt = myQueue.enqueue('Matt')
const queuePavel = myQueue.enqueue('Pavel')
const queueSamir = myQueue.enqueue('Samir')
// console.log(queueSamir, "queueSamir");
const deQueue1 = myQueue.dequeue()
const deQueue2 = myQueue.dequeue()
const deQueue3 = myQueue.dequeue()
console.log(deQueue3, 'deQueue3')

// Joy
// Matt
// Pavel
// Samir
