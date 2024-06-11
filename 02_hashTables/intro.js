let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function () {
    console.log('ahhhhh!')
  },
}

user.age // O(1)
console.log((user.spell = 'abra kadabra')) // O(1)
console.log(user, 'user')
user.scream() // O(1)
