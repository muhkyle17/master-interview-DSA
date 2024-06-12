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
}

// const getFirstRecurringCharacter = firstRecurringCharacter([
//   2, 5, 1, 2, 3, 5, 1, 2, 4,
// ]);
const getFirstRecurringCharacter = firstRecurringCharacter([1, 1])
console.log(getFirstRecurringCharacter, 'getFirstRecurringCharacter')

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
