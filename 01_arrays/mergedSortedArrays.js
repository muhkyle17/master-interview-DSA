function mergeSortedArrays(array1, array2) {
  const mergedArray = []
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
