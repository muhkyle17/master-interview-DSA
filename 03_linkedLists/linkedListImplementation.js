// 10-->5-->16

// let myLinkedLIst = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this // References what the class is or the class that was instanciated
  }

  // 1-->10-->5-->16
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    }
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }

  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }

  // 1-->10-->99-->5-->16
  insert(index, value) {
    // Check for proper parameters;
    if (index >= this.length) {
      return this.append(value)
    }

    // if (index === 0) {
    //   this.prepend(value);
    //   return this.printList();
    // }

    const newNode = {
      value: value,
      next: null,
    }

    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
    return this.printList()
  }

  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  remove(index) {
    // check Parameters
    if (index >= this.length) {
      return this.printList()
    }

    const leader = this.traverseToIndex(index - 1)
    const unwantedNode = leader.next
    leader.next = unwantedNode.next
    this.length--
    return this.printList()
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
myLinkedList.insert(20, 88)
myLinkedList.remove(1)
console.log(myLinkedList.printList(), 'printlist function')

console.log(myLinkedList, 'myLinkedList')
