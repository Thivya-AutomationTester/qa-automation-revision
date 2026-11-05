    type studentStructure={
        name:string,
        age:number,
        status:boolean,
        department:string,
        city?:string
    }

    let student:studentStructure={
        name:'Sherin',
        age:22,
        status:false,
        department:'qa'
    }


/* //getting all values
let {name,age,status,department}=student
console.log(name,age,status,department)  */

//getting only required values
let {name,department}=student
console.log(name,department) 

//alias Name
let {name:studentName,age:studentAge}=student
console.log(studentName,studentAge) 

//Rest
//In object destructuring, the rest operator collects all remaining properties that have not already been extracted, regardless of their position.

let {age:dd,...rest}=student
console.log(rest)
console.log(dd) 

//default
let {city='chennai'}=student
console.log(city)

//functions
type empType={
    nameStudent:string,age:number
} 

function displayEmpInfo({nameStudent,age}:empType){
console.log(nameStudent,age)
}

displayEmpInfo({nameStudent:'karthik',age:34})

function returnObject(){
    return {nameStudent:'thivya',age:32}
}
let {nameStudent,age} =returnObject()
console.log(nameStudent,age)

