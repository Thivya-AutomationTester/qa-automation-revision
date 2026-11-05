// 1. Print numbers from 20 to 30 
for (let i = 20; i <= 30; i++) {
    console.log(i)
}
console.log("*".repeat(80))

//while
let num=20
while(num<=30){
    console.log(num);
    num++;
}
//2. Print numbers from 1 to 10 in reverse (example - 10 9 8..)

for (let i = 10; i > 0; i--) {
    console.log(i)
}
console.log("*".repeat(80))

//while
let rev=10
while(rev>0){
    console.log(rev);
    rev--;
} 
    console.log("*".repeat(80))

//Find sum of first 5 numbers
let sum = 0
for (let i = 1; i <= 5; i++) {
    sum = sum + i
}
console.log(sum)

console.log("*".repeat(80))
//while
let sumWhile=0,num1=1
while(num1<=5){
  sumWhile=sumWhile+num1
    num1++;
}
console.log(sumWhile)
console.log("*".repeat(80))

// print odd numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}
console.log("*".repeat(80))
//while
let num2=1
while(num2<=20){
    if (num2 % 2 !== 0) {
        console.log(num2)
    }
    num2++;
}
console.log("*".repeat(80))


// find sum of even numbers from 1 to 10
let sumEven = 0
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        sumEven = sumEven + i
    }
}
console.log(sumEven)
console.log("*".repeat(80))

//while
let num3=1,sumEven1=0;
while(num3<=10){
    if(num3%2===0){
         sumEven1 = sumEven1 + num3
    }
    num3++;
}
console.log(sumEven1)
console.log("*".repeat(80))


// print 1 to 50 by skipping 10 multiples (it should not print 10,20,30,40 and 50)
for (let i = 1; i <= 50; i++) {
    if (i % 10 !== 0) {
        console.log(i)
    }
} 
console.log("*".repeat(80))
//while
let i=1;
while(i<=50){
    if(i%10!==0){
        console.log(i)
    }
    i++;
}
console.log("*".repeat(80))