function mergeSortedArrays(array1, array2) {
  const mergedArray = []

  // Check input
  if (array1.length === 0) {
    return array2
  }
  if (array2.length === 0) {
    return array1
  }

  for (let i = 0; i < array1.length; i++) {
    mergedArray.push(array1[i])
  }
  for (let j = 0; j < array2.length; j++) {
    mergedArray.push(array2[j])
  }
  console.log(mergedArray, 'mergedArray')
  return mergedArray.sort((a, b) => a - b)
}

const sortedArray = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]) // [0, 3, 4, 4, 6, 30, 31];
console.log(sortedArray, 'sortedArray')
