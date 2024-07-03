class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
    } else {
      let currentNode = this.root

      // Keep looping until the left of the value is null
      while (true) {
        if (value < currentNode.value) {
          // Go left
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          // Continue left
          currentNode = currentNode.left
        } else {
          // Go right
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          // Continue right
          currentNode = currentNode.right
        }
      }
    }
  }

  lookupInitialSolution(value) {
    if (!this.root) {
      return false
    }

    let currentNode = this.root
    if (value === currentNode.value) {
      return this.root
    }

    while (currentNode) {
      if (value < currentNode.value) {
        // Go left
        if (currentNode.left.value === value) {
          return currentNode.left
        }
        // Keep going left
        currentNode = currentNode.left
      } else {
        // Go right
        if (currentNode.right.value === value) {
          return currentNode.right
        }

        // Keep going right
        currentNode = currentNode.right
      }

      return null
    }
  }

  lookup(value) {
    if (!this.root) {
      return false
    }
    let currentNode = this.root
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if (currentNode.value === value) {
        return currentNode
      }
    }
    return null
  }
}

const tree = new BinarySearchTree()

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

// Getting to the last line doesn't work so 1, 6, 15, and 170 isn't found
const lookupInitialSolution = tree.lookupInitialSolution(2)
console.log(lookupInitialSolution, 'lookupInitialSolution')

const lookup = tree.lookup(100)
console.log(lookup, 'lookup')
// console.log(JSON.stringify(traverse(tree.root)), "tree");

//      9
//   4     20
// 1  6  15  170

function traverse(node) {
  const tree = { value: node.value }
  tree.left = node.left === null ? null : traverse(node.left)
  tree.right = node.right === null ? null : traverse(node.right)
  return tree
}
