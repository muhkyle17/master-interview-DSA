//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i]
      }
    }
  }
  return undefined
} // O(n^2)

function firstRecurringCharacter2(input) {
  let map = {}
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i
      console.log(map, 'map')
    }
  }
  return undefined
} // O(n)

const getFirstRecurringCharacter = firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])
const getFirstRecurringCharacter2 = firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4])
console.log(getFirstRecurringCharacter, 'getFirstRecurringCharacter')
console.log(getFirstRecurringCharacter2, 'getFirstRecurringCharacter2')

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// function fixedFirstRecurringCharacter(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// } // O(n^2)

// console.log(
//   fixedFirstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]),
//   "fixedFirstRecurringCharacter",
// );

const map = {}
map[0] = 'apples'
map[1] = 'oranges'
map[2] = 'grapes'
map[3] = 'bananas'
map[4] = 'pears'

const arrayObject = Object.values(map)
console.log(arrayObject, 'arrayObject')

const entries = Object.entries(map)
console.log(entries, 'entries')

const fromEntries = Object.fromEntries(entries)
console.log(fromEntries, 'fromEntries')
