/* Create a variable studentName of type string and print it. Then try to assign a number and read the
error.

let userName: string = "thivya";
userName = 20;
console.log(userName); */

/*Write a function add(a, b) with number types that returns the sum. Call it with a string and read the
error.
function add(a:number,b:number):number{
    return a+b;
}
console.log(add("3",23))*/

/* Write a function printMessage(msg: string): void that prints the message.
function printMessage(msg:string):void{
    console.log(msg)
}
printMessage("Welcome to Ts World") */

/* Write a function fullName(first: string, last?: string) that returns the full name if last is
given, otherwise only first.
function fullName(first:string,last?:string){
    if(last!==undefined){
        return first+" "+last
    }
    return first
}
console.log(fullName("sherin"))
console.log(fullName("sherin","john")) */

/* 
Write a function openUrl(url: string, browser: string = 'chrome') and call it with and
without the browser.
function openUrl(url:string,browser:string='chrome'):void{
    console.log( `url is ${url} and browser is ${browser}`)
}
openUrl("playwright")
openUrl("selenium","firefox") */
/* 
Write a function isEven(n: number): boolean that returns true if the number is even.
function isEven(a:number):boolean{
    return a % 2 === 0;
}
console.log(isEven(2))
console.log(isEven(3)) */