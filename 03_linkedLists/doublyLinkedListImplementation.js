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
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    newNode.prev = this.tail
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
      prev: null,
    }
    newNode.next = this.head
    this.head.prev = newNode
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

    const newNode = {
      value: value,
      next: null,
      prev: null,
    }

    const leader = this.traverseToIndex(index - 1)
    const follower = leader.next
    leader.next = newNode
    newNode.prev = leader
    newNode.next = follower
    follower.prev = newNode
    this.length++
    console.log(this, 'this')
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
    console.log(leader, 'leader')
    const unwantedNode = leader.next
    console.log(unwantedNode, 'unwantedNode')
    leader.next = unwantedNode.next
    console.log(leader, 'leader')
    this.length--
    return this.printList()
  }
}

const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(1, 99)
// myLinkedList.insert(20, 88);
// myLinkedList.remove(1);
console.log(myLinkedList.printList(), 'printlist function')

// console.log(myLinkedList, "myLinkedList");
