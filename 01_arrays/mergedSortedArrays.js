// My solution
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

function mergeSortedArrays2(array1, array2) {
  let mergedArray = [...array1, ...array2]
  return mergedArray.sort((a, b) => a - b)
}

const sortedArray2 = mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30])
console.log(sortedArray2, 'sortedArray2')

// Tutorial solution
function mergeSortedArrays3(array1, array2) {
  const mergedArray = []
  let array1Item = array1[0]
  let array2Item = array2[0]
  let i = 1
  let j = 1

  // Check input
  if (array1.length === 0) {
    return array2
  }
  if (array2.length === 0) {
    return array1
  }

  while (array1Item || array2Item) {
    // console.log(array1Item, array2Item);
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item)
      array1Item = array1[i]
      i++
    } else {
      mergedArray.push(array2Item)
      array2Item = array2[j]
      j++
    }
  }

  return mergedArray
}

const sortedArray3 = mergeSortedArrays3([0, 3, 4, 31], [4, 6, 30])
console.log(sortedArray3, 'sortedArray3')
