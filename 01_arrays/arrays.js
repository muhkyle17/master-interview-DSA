const strings = ['a', 'b', 'c', 'd']
// 4 * 4 = 16 bytes of storage

console.log(strings[2])

// push -- Add an item at the end of the array
strings.push('e') // O(1)

// pop -- Remove last item
strings.pop('') // O(1)
strings.pop('') // O(1)

// unshift -- Add an item at the beginning of the array
strings.unshift('x') // O(n) -- this is because we have to shift all the items to the right so it's looping

// splice -- Add an item at the middle of the array
strings.splice(2, 0, 'alien') // O(n/2) -- O(n)

console.log(strings, 'strings')
