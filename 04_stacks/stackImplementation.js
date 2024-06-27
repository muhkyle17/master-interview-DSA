class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek() {
    return this.top
  }

  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      const holdingPointer = this.top
      this.top = newNode
      this.top.next = holdingPointer
    }
    this.length++

    return this
  }

  pop() {}
}

const myStack = new Stack()
const google = myStack.push('google')
// console.log(google, "google");
const udemy = myStack.push('udemy')
// console.log(udemy, "udemy");
const discord = myStack.push('discord')
console.log(discord, 'discord')
console.log(myStack.peek(), 'peek')
