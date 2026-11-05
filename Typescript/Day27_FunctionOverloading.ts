/* Function overloading means defining multiple possible function signatures for the same function.

The signatures should usually have different parameter types or a different number of parameters, so TypeScript can determine which version to use.

In your example, although you wrote multiple signatures, having the same parameters with only different return types doesn't create meaningful overloading.

In this example - TypeScript will select the first matching overload, which says the result is a string. */

function add(a: string, b: number): string
function add(a: string, b: number): number

function add(a: string, b: number): string | number {
    return a + b;
}

console.log(add('thivya', 24))
function mul(a: number, b: number): void;
function mul(a: string, b: string): void;
function mul(a: number | string, b: number | string): void {
    if (typeof a === 'number' && typeof b === 'number')
        console.log(a * b)
    if (typeof a === 'string' && typeof b === 'string')
        console.log(a + " " + b)
}
mul('thivya','qa')
mul(2,22)

/* When NOT to Use Function Overloading
Avoid when simple union types are enough.
Instead of:
function show(a:number):void
function show(a:string):void
You can simply write:
function show(a:number | string):void{
    console.log(a)
} */

//using Arrow functions

type calc={
    (a:number,b:number):number;
    (a:string,b:string):string;
};
const operations=((a:number|string,b:number|string):number|string=>{
if(typeof a==='number'&& typeof b==='number'){
    return a+b
}
if(typeof a==='string'&& typeof b==='string'){
    return a+b
}
throw new Error('Operation failed because of different data types')
}) as calc
console.log(operations(2,4))