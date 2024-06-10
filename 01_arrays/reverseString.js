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

function reverse2(str) {
  return str.split('').reverse().join('')
}
const reversedString2 = reverse2('Hi My name is Andrei')
console.log(reversedString2, 'reversedString2')

const reverse3 = str => str.split('').reverse().join('')
console.log(reverse3('Hi My name is Andrei'), 'reverse3')

const reverse4 = str => [...str].reverse().join('')
console.log(reverse4('Hi My name is Andrei'), 'reverse4')
