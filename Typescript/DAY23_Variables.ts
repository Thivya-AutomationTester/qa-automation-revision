//1. Declare a student name, age, and enrollment status with types.

let name:string="Sherin"
let age:number=20
let enrollmentStatus:boolean=true

//2. Use let for a score and update its value.
let score:number=50
score=60
console.log(name,age,enrollmentStatus,score)

//3. Declare a const array and add a value with push.
const arr:number[]=[1,2,3]
arr.push(4)
console.log(arr)

//4. Restrict a variable to the values QA, UAT, and PROD.
let env:"QA"|"UAT"|"PROD"
env='QA'
console.log(env)

//5. Define a Student interface and create a matching object.
interface Student{
    name:string,
    marks:number
}
const student: Student = {
  name: "Priyanka",
  marks: 95
};
console.log(student.name)
console.log(student.marks)

//6. Store a string in unknown and narrow it before calling toUpperCase.

let word:unknown="ria"
if(typeof word === "string"){
console.log(word.toUpperCase())
}