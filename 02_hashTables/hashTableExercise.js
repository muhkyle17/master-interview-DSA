class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  } // O(1)

  set(key, value) {
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
      this.data[address].push([key, value])
      // console.log(this.data, "this.data");
    }
    this.data[address].push([key, value])
    return this.data
  } // O(1)

  get(key) {
    let address = this._hash(key)
    const currentBucket = this.data[address]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  } // if no collisions, O(1) but if there are collisions, O(n)

  keys() {
    const keysArray = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray
  }

  // Includes hash collisions
  keys2() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0])
          }
        } else {
          result.push(this.data[i][0])
        }
      }
    }
    return result
  }
}

const myHashTable = new HashTable(50)
const exampleHash = myHashTable._hash('grapes')
// console.log(exampleHash, "exampleHash");

const setFunction = myHashTable.set('grapes', 10000)
const setFunctionApples = myHashTable.set('apples', 54)
const setFunctionOranges = myHashTable.set('oranges', 2)
// console.log(setFunctionApples, "setFunction");

const getFunctionGrapes = myHashTable.get('grapes')
const getFunctionApples = myHashTable.get('apples')
const getKeys = myHashTable.keys()
const getKeys2 = myHashTable.keys2()
console.log(getKeys, 'getKeys')
console.log(getKeys2, 'getKeys2')
