class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
      console.log(hash, 'hash')
    }
    return hash
  }

  set(key, value) {
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
      this.data[address].push([key, value])
      console.log(this.data, 'this.data')
    }
    this.data[address].push([key, value])
    return this.data
  }
}

const myHashTable = new HashTable(2)
const exampleHash = myHashTable._hash('grapes')
console.log(exampleHash, 'exampleHash')

const setFunction = myHashTable.set('grapes', 10000)
const setFunctionApples = myHashTable.set('apples', 54)
console.log(setFunctionApples, 'setFunction')
// myHashTable.get("grapes");
