let studentDetails=["sherin",20,"QA","Bio","India"]

let [name,age,dept,major,country]=studentDetails
console.log(name)
//to get first and last
let[first,,,,country2]=studentDetails
console.log(first,country2)
//rest
let[,,departtment,...rest]=studentDetails
console.log(rest)
//default params
let [,,,,city1="India"]=studentDetails
console.log(city1)