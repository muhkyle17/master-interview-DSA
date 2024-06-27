class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.array = []
  }

  peek() {
    return this.array[this.array.length - 1]
  }

  push(value) {
    this.array.push(value)
    return this
  }

  pop() {
    this.array.pop()
    return this
  }
}

const myStack = new Stack()
const google = myStack.push('google')
// console.log(google, "google");
const udemy = myStack.push('udemy')
// console.log(udemy, "udemy");
const discord = myStack.push('discord')
console.log(discord, 'discord')
console.log(myStack.peek(), 'peek for the last item in the array')
// console.log(myStack.peek(), "peek");
console.log(myStack.pop(), 'pop')
console.log(myStack.pop())
console.log(myStack.pop())
