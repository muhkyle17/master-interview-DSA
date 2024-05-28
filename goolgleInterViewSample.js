const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'a']

// what we want to do
// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true,
// }
// array2[index] === obj.properties

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create object where properties === items in the array
  let map = {}
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i]
      map[item] = true
    }
  }
  // loop through the second array and check if item in second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      console.log(true, 'true')
      return true
    }
  }
  console.log(false, 'false')
  return false
}

// O(a + b) Time complexity
containsCommonItem2(array1, array2)
