//syntax
let studentInfo:[string,number,boolean]=['anu',25,false]
//Access
console.log(studentInfo[0])
console.log(studentInfo[1])
console.log(studentInfo[2])
//update
studentInfo[0]="thivya"
console.log(studentInfo[0])
//optional
let empInfo: [string, number?];

empInfo = ["leela"];       // ✅ The second element is optional.
empInfo = ["shee", 22];    // ✅ Both elements are provided.

empInfo.push(40);          // ✅ Allowed: number is a valid tuple element type.
empInfo.push("ss");        // ✅ Allowed: string is a valid tuple element type.

// empInfo.push(true);     // ❌ Error: boolean is not a valid tuple element type.

console.log(empInfo);
// console.log(empInfo[2]); // ❌ Error: Tuple type has no element at index 2, because only the first two positions are declared in the tuple type.

//rest
let staffInfo:[string,...number[]]=["ram",3,4,5]
console.log(staffInfo)
//named Tuple
let departments:[qa:string,Dev:string]=["Thivya","Karthik"]
console.log(departments)
//Tuple in functions
function displayEmployeeInfo(emp:[string,number]):[string,number]{
    return emp;
}
console.log(displayEmployeeInfo(["ananya",22]))

//or u can also use following method using type
type empInfo=[string,number]
function displayInfo(emp:empInfo):empInfo{
    return emp
}
console.log(displayInfo(['leelu',44]))

//function using spread operator
function display(name: string, age: number): void {
    console.log(name, age);
}
 
const employee: [string, number] = ["Mohan", 30];
 
display(...employee);


