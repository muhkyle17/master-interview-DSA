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

// context
// instantiation
