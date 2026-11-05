let student={
    nameStudent:'Suju',
    age:33,
    profession:'QA',
    place:'chennai'
}
let {nameStudent:studentOne,place:loc}=student
console.log(studentOne,loc)

let {age,...others}=student
console.log(others)

let studentArr=['kenn',22,'Dev','Trichy']

let [studentFirst,,...rem]=studentArr
console.log(rem)

type stud={nameStudent:string,age:number,profession:string,place:string}
function displayStudent(studentA:stud){
let{nameStudent,place}=studentA
console.log(nameStudent,place)
}
displayStudent(student)
