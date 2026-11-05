//1. Write isEven that accepts a number and returns a boolean.

function checkNumber(num: number): boolean {
    if (num % 2 === 0) {
        return true
    }
    return false
}
console.log(checkNumber(30))

//2. Write greetStudent with a required name and an optional course.
function greetStudent(name: string, course?: string): string {
    if (course !== undefined) {
        return name + " " + course
    }
    return name
}

console.log(greetStudent("surya", "ReactJs"))
console.log(greetStudent("Thivya"))

//3. Write calculateBill with price and a default quantity of 1.
function calculateBill(price: number, quantity = 1) {
    console.log(price * quantity)
}
calculateBill(60, 2)
calculateBill(4)

//4. Write average using rest parameters. Decide how to handle no inputs.
function average(...num: number[]) {
    const sum = num.reduce((sum, acc) => sum + acc, 0);
    const avg = sum / num.length;
    console.log(avg)
}
average(2, 4, 6, 8, 10);

//spread operator
let aaa: [number, number, number, number, number] = [2, 4, 5, 6, 7]
function add(a: number, b: number, c: number, d: number, e: number) {
    return a + b + c + d + e
}
console.log(add(...aaa));

//5. Define a NumberOperation type and implement multiplication.

type NumberOperation = "add" | "sub" | "mul"

function calculation(a: number, b: number, operation: NumberOperation) {
    switch (operation) {
        case "add": return a + b
        case "sub": return a - b
        case "mul": return a * b
    }
}

console.log(calculation(10, 20, "mul"))

//6. Write a generic identity function and call it with an object.
function identity<T>(a: T): T {
    return a;

}
const age = identity(33)
const name1 = identity("Mohan");
const active = identity(true);
const explicit = identity<number>(100);
console.log(age, name1, active, explicit)

//  active.toUpperCase()//ts will give erorr

function identityany(a: any): any {
    return a
}
const ttext = identityany("lia")
console.log(ttext.toUpperCase())
const nnum = identityany(20)
console.log(nnum.toUpperCase())//error captured only in runtime

//7. Write an async function returning Promise<string> and await it.

async function welcome(): Promise<string> {
    return "hello";
}
async function main() {
    console.log(await welcome());
}

main();


async function numcheck(): Promise<number> {
    return 7;
}
async function out() {
    console.log(await numcheck());
}

out();

numcheck().then(e => console.log(e))

//try..catch
async function login() {
    throw new Error("error found and the promise is rejected here")
}
async function mainn() {
    try {
        const result = await login();
        console.log(result);
    } catch (error) {
        console.log("Caught:", error);
    }
}

mainn();

//8.interfaces

interface student {
    "firstName": string,
    "marks": number
}

function studentDetails():student{
     let studentName="sherin";
   let  studentAge=12;
    return{firstName:studentName,marks:studentAge};
}
const output=studentDetails();
console.log(output)

///////////////////////////////////////
interface Student {
  name: string;
  marks: number;
}

function createStudent(name: string, marks: number): Student {
  return { name, marks }; //if properties name are same then we no need to assign them explicitly
}
