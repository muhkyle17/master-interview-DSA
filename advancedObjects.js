// reference type
var object1 = { value: 10 }
var object2 = object1
var object3 = { value: 10 }

object1 === object2 // true
object1 === object3 // false
// This is because when object1 was NEWLY created, object2 was assigned or REFERENCED to object1
// Object3 on the other hand is a NEW object that was created thus NOT referencing object1

object1.value = 15 // 15
object2.value // 15
// object2.value becomes 15 as well because object1.value was changed to 15 and object2.value is referencing object1.value
object3.value // 10

// [] === []
// returns false because an array is essentially a data structure or an object so the first array is a new array being created while the second array is a new array being created as well

//////////////////////////
// context vs. scope
function b() {
  let a = 4
}
console.log(a, 'a') // returns a is not defined because a is only within the scope of function b

// context tells you where you where we are within the object
console.log(this)
console.log(this === window) // returns true
// this refers to what object it's inside of

function a() {
  console.log(this)
}
a()

const object4 = {
  a: function () {
    console.log(this)
  },
}

// instantiation
// - when you make a copy of an object and reuse the code -- you're making multiple copies of an object
class Player {
  constructor(name, type) {
    console.log(this, 'player')
    this.name = name
    this.type = type
    console.log(this.name, 'this.name')
    console.log(this.type, 'this.type')
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    // Whenever you extend another class, you have to use the 'super' and pass in the values that the other class takes in
    // This is so that you have access to the player's classes as well
    super(name, type)
    console.log(this, 'wizard')
  }
  play() {
    console.log(`WEEEE I'm a ${this.type}`)
  }
}

const wizard1 = new Wizard('Shelly', 'Healer')
const wizard2 = new Wizard('Shawn', 'Dark Magic')
