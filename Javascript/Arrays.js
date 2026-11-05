let arr = [4, 5, 6, 7]
//Iterate
arr.forEach(i => console.log(i))
console.log("*".repeat(80))
for (let i of arr) {
    console.log(i)
}
console.log("*".repeat(80))
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
//concat two arrays
let arrB = [1, 2]
console.log(arr)
console.log(arr.concat(arrB))
//sort
let numArr = [4, 1, 3, 2, 0, 6]
numArr.sort((a, b) => a - b)
console.log('Sorted in ascending--> ' + numArr)
numArr.sort((a, b) => b - a)
console.log('Sorted in descending--> ' + numArr)
console.log("*".repeat(80))
console.log(numArr.reverse())//here array will be returned
console.log('reverse an array: ' + numArr.reverse())//when we use string and array :: the output will be in string format

//splice
let arrSplice = [5, 6, 7, 3, 4]
console.log("*".repeat(80))
//remove value at second index
console.log(arrSplice.splice(2, 2))//returns the removed elements array
console.log(arrSplice)
console.log("*".repeat(80))
//Insert 1 at index 2 without removing anything.
console.log(arrSplice.splice(2, 0, 1))//returns an empty array because no elements were removed
console.log(arrSplice)
console.log("*".repeat(80))
//replace 6 with 10
console.log(arrSplice.splice(1, 1, 10))//returns the removed elements array
console.log(arrSplice)
console.log("*".repeat(80))
//map
let arrMapTest = [1, 2, 3, 4]
console.log(arrMapTest)//returns original Array
let newArray = arrMapTest.map(e => e + 2)
console.log(newArray)
console.log("*".repeat(80))
//with index
let result = arrMapTest.map((ele, index) => {
    return ele + index;//adds respective index to each element in the array
})
console.log(arrMapTest)//returns original Array
console.log(result)
//with index and array
arrMapTest.map((ele, index, array) => {

    console.log(ele)
    console.log(index)
    console.log(array)

})
console.log("*".repeat(80))
// To access only the 3rd parameter,
// we need placeholders for the 1st and 2nd parameters.
// We commonly use _ and __ for the unused parameters.
// We cannot use the same parameter name twice in the same function.
arrMapTest.map((_, __, array) => console.log(array))
console.log("*".repeat(80))

//filter

let arrFilter = [1, 3, 2, 4, 6]
console.log(arrFilter.filter(ele => ele % 3 === 0))//returns new array based on the condition
console.log("*".repeat(80))
//reduce

console.log(arrFilter.reduce((accumulator, result) => result + accumulator, 0))
console.log("*".repeat(80))

//search methods
//find
let arrSearchMethod= [1, 3, 2, 4, 6,4,7]
console.log(arrSearchMethod.find(e=>e>2))//returns first matching element
console.log(arrSearchMethod.findLast(ele=>ele>3))//returns last matching element
console.log(arrSearchMethod.findIndex(ele=>ele>3))//returns index of first matching element
console.log(arrSearchMethod.findLastIndex(ele=>ele>3))//returns index of last matching element
console.log(arrSearchMethod.indexOf(4,4))
console.log(arrSearchMethod.lastIndexOf(4,4))
console.log("*".repeat(80))

//flatten 
const numbers = [1, [2, 3], [4, [5, 6]]];
console.log(numbers.flat());//flattens one level
console.log(numbers.flat(2));///flattens twolevel
const number_s = [1, [2, 3], [4, [5, [6,7,8]]]];
console.log(number_s.flat(2))
console.log(number_s.flat(Infinity))//flattens all the levels