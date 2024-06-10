// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'this is not a word!'
  }

  const backwards = []
  const totalItems = str.length - 1
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i])
  }
  console.log(backwards, 'backwards')

  return backwards.join('')
}

const reversedString = reverse('Hi My name is Andrei')
console.log(reversedString, 'reversedString')
