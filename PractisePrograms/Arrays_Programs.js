// Use map to convert ["apple", "banana", "mango"] to uppercase.
let fruits = ["apple", "banana", "mango"]
let outcome = fruits.map(c => c.toUpperCase());
console.log(outcome);

//Use filter to find numbers greater than 50 in [20, 55, 80, 40].
let numbers = [20, 55, 80, 40]
let result=numbers.filter(num =>num>50)
console.log(result)

//Use reduce to calculate the sum of [5, 10, 15, 20].
let calculate=[5, 10, 15, 20]
let outputSum=calculate.reduce((sum,acc)=>sum+acc,0)
console.log(outputSum)

//Use find to locate the first student whose marks exceed 80 in [{name: "Asha", marks: 75}, {name: "Ravi", marks: 90}].

let students=[{name: "Asha", marks: 75}, {name: "Ravi", marks: 90}]
let maxMarks=students.find(p=>p.marks>80)
console.log(maxMarks)

//Use some to check whether any product has stock equal to 0 in [{name: "Pen", stock: 5}, {name: "Book", stock: 0}].
let product=[{name: "Pen", stock: 5}, {name: "Book", stock: 0}]
let outResult=product.some(p=>p.stock===0)
console.log(outResult)

//Use every to check whether all numbers in [2, 4, 6] are positive.
let numCheck=[2, 4, 6,7]
let resullt=numCheck.every(num=>num>0)
console.log(resullt)

//Use slice to copy the last three items from [10, 20, 30, 40, 50].
let items=[10, 20, 30, 40, 50]
console.log(items.slice(items.length-3,items.length))
console.log(items.slice(-3));

//Use splice to remove the second item from ["Apple", "Banana", "Mango"].
let obst=["Apple", "Banana", "Mango"]
console.log(obst.splice(1,1))
console.log(obst)

//Sort [{name: "Asha", salary: 60000}, {name: "Ravi", salary: 45000}] by salary in ascending order.
let sortingArray=[{name: "Asha", salary: 60000}, {name: "Ravi", salary: 45000}]
sortingArray.sort((a,b)=>a.salary-b.salary)
console.log(sortingArray)

//Combine filter and map to get the names of students with marks of at least 35 in [{name: "Asha", marks: 75}, {name: "Ravi", marks: 30}].
let lernende=[{name: "Asha", marks: 75}, {name: "Ravi", marks: 30}]

let res=lernende.filter(n=>n.marks>=35).map(p=>p.name)
console.log(res)

//Fill
//fill(value,startindex,endindex) start and end are optional
let fruitsArr=["Apple", "Banana", "Mango"]
console.log(fruitsArr.fill("Cherry", 1))	//["Apple", "Cherry", "Cherry"]
console.log(fruitsArr.fill("cherry",1,3))   // 'Apple', 'cherry', 'cherry' ]
console.log(fruitsArr.fill("cherry",4,8))
console.log(fruitsArr.fill("Cherry"))	   //["Cherry", "Cherry", "Cherry"]
console.log(fruitsArr.fill("Cherry", 0, 2))	//["Cherry", "Cherry", "Mango"]
console.log(fruitsArr)

//copyWithin(targetIndex,startIndex)
/* array.copyWithin(target, start, end)
Parameter	Meaning	Required?
target	Index where the copied elements should be placed	YesRequired
start	Index to start copying from	Not required (default 0)
end	Index to stop copying before (exclusive)	NotRequired (default array.length) */

const arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(0,4)) //[ 5, 2, 3, 4, 5 ]
console.log(arr.copyWithin(0, 1, 3)) //[ 2, 3, 3, 4, 5 ]

//reduceRight - here initial value is optional if not given it takes the last ele in reduceRight and first ele in reduce
let stringArr = ["A", "B", "C"];
console.log(stringArr.reduce((a,currentValue)=>a+currentValue))
console.log(stringArr.reduceRight((a,currentValue)=>a+currentValue))
console.log(stringArr.reduce((a,currentValue)=>a+currentValue),"")
console.log(stringArr.reduceRight((a,currentValue)=>a+currentValue),"")

let gemuse=["knoblauch","kartoffeln","zwiebeln"]
gemuse.forEach((value,index)=>console.log(`${index}:${value}`))

//flatmap vs map

let mapArray=[2,4,6,8,10]
let modifiedArr=mapArray.map(n=>n*2)
let nestedArr=mapArray.map(n=>[n*2])
let flattedArr=mapArray.flatMap(n=>[n*2])
console.log(modifiedArr)//[ 4, 8, 12, 16, 20 ]
console.log(nestedArr)//[ [ 4 ], [ 8 ], [ 12 ], [ 16 ], [ 20 ] ]
console.log(flattedArr)//[ 4, 8, 12, 16, 20 ]

const sentences = ['hello world', 'foo bar'];
let modifiedSentence=sentences.map(s=>s.split(' '))
console.log(modifiedSentence)//[ [ 'hello', 'world' ], [ 'foo', 'bar' ] ]
let flattendSentence=sentences.flatMap(s=>s.split(' '))
console.log(flattendSentence)//[ 'hello', 'world', 'foo', 'bar' ]
