// Find 1st, Find Nth...
const array = ['hi', 'my', 'teddy']
console.log(array[0]) // O(1)
console.log(array[array.length - 1]) // O(1)

const array2 = [
  { tweet: 'hi', date: 2012 },
  { tweet: 'my', date: 2014 },
  { tweet: 'teddy', date: 2018 },
] // O(n^2) -- bad for scale
console.log(array2[0]) // O(1)
console.log(array2[array.length - 1])
