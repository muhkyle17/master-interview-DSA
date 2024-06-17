const basket = ['apples', 'grapes', 'pears']

// linked list: apples linksto--> grapes linksto--> pears

// apples
// 8947 --> grapes
//           8742 --> pears
//                     372 --> null

let obj1 = { a: true }
let obj2 = obj1
obj1.a = 'booya'
delete obj1
console.log(obj1, 'obj1')
console.log(obj2, 'obj2')
