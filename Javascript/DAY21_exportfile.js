/*
//method 1export let add=(a,b)=>a+b
export let sub=(a,b)=>a-b
export let mul=(a,b)=>a*b

export function concat(a,b){
    return a+b;
}
*/
/*
//method 2-preferred
let add=(a,b)=>a+b
let sub=(a,b)=>a-b
let mul=(a,b)=>a*b

function div(a,b){
    return a/b
}

export {add,sub,mul,div as division};
*/
//default export

/*
let add=(a,b)=>a+b
let sub=(a,b)=>a-b
let mul=(a,b)=>a*b

export default function sumUp(a,b){
    return a+2+b
}

class Student{

    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    displayDetails(){
        console.log(`the name of the student is ${this.name} and id is ${this.id}`)
    }
}
export {add,sub,mul,Student};*/

//default export on arrow functions
/*
export default (a, b) => a + b;

let mul=(a,b)=>a*b

export {mul};*/

//other way to export default fun

let add=(a,b)=>a+b
export default add;