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
    const newNode = {
      value: value,
      next: null,
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    console.log(this, 'this')
    return this // References what the class is or the class that was instanciated
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
console.log(myLinkedList, 'myLInkedList}')
console.log(myLinkedList.head.next.next, 'head')
