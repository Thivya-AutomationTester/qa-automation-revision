type empinfo=[string,number]

function displayEmployee(employee:empinfo){
    console.log(employee[0])
    console.log(employee[1])
    console.log(employee)
}

displayEmployee(['Sherin',111])

function returnEmployeeInfo():empinfo{
    return ['Anuj',222]
}

console.log(returnEmployeeInfo())

let [namee,...remaining]=returnEmployeeInfo()
console.log(namee)
console.log(remaining)

function displayUsingSpread(...studentInfo:any){
    console.log(studentInfo)
}

displayUsingSpread('sheirn',123,55)