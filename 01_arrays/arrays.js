const strings = ['a', 'b', 'c', 'd']
// 4 * 4 = 16 bytes of storage

console.log(strings[2])

// push -- Add an item at the end of the array
strings.push('e') // O(1)

// pop -- Remove last item
strings.pop('') // O(1)
strings.pop('') // O(1)

console.log(strings, 'strings')
