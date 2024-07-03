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
        currentNode = currentNode.left

        if (currentNode.left.value === value) {
          return currentNode.left
        }
      } else {
        currentNode = currentNode.right

        if (currentNode.right.value === value) {
          return currentNode.right
        }
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

  remove(value) {
    if (!this.root) {
      return false
    }
    let currentNode = this.root
    let parentNode = null
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left
            }
          }

          //Option 2: Right child which doesn't have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left
          if (parentNode === null) {
            this.root = currentNode.right
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left
          let leftmostParent = currentNode.right
          while (leftmost.left !== null) {
            leftmostParent = leftmost
            leftmost = leftmost.left
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right
          leftmost.left = currentNode.left
          leftmost.right = currentNode.right

          if (parentNode === null) {
            this.root = leftmost
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost
            }
          }
        }
        return true
      }
    }
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
tree.remove(170)

// Was able to find 1 and 170 but can't find 6 and 15
const lookupInitialSolution = tree.lookupInitialSolution(1)
console.log(lookupInitialSolution, 'lookupInitialSolution')

const lookup = tree.lookup(170)
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
