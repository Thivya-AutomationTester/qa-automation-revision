//It wont allow duplicate values
let numbers = new Set()
//add
numbers.add(1)
numbers.add(2)
numbers.add(2)//it wont add again
numbers.add(3)
// to get size
console.log('size is ' + numbers.size)
//to check if it has elements
console.log(numbers.has(1))
console.log(numbers)
//delete
numbers.delete(2)
console.log(numbers)
//clear
numbers.clear()
console.log(numbers)
//initialize
let setInit = new Set([1,3,2, 3, 4, 4, 5, 6])
console.log(setInit)
let setNum=[2, 3, 4, 4, 5, 6]
//find unique and non unique numbers
let unique = new Set();
let duplicateSet = new Set();
for (let n of setNum) {
    if (!unique.has(n)) {
        unique.add(n)
    }
    else {
        duplicateSet.add(n)
    }
}
console.log(unique)
console.log(duplicateSet)
//set cannot be accessed using indexes
console.log(duplicateSet[0])
//convert set to array
let setToArray=[...setInit]
console.log(setToArray)
console.log(setToArray[0])