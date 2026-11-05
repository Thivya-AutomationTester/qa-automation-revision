//1. Check whether a number is positive, negative, or zero
let num = -5;

if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}

//2.Check whether a number is even or odd
let num1 = 7;

if (num1% 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

//3.Find the largest of two numbers
let a = 10;
let b = 20;

if (a > b) {
    console.log(a + " is larger");
} else if (b > a) {
    console.log(b + " is larger");
} else {
    console.log("Both numbers are equal");
}

//4. Find the largest of three numbers
let a1 = 10;
let b1 = 25;
let c = 15;

if (a1 >= b1 && a1 >= c) {
    console.log(a1 + " is the largest");
} else if (b1 >= a1 && b1 >= c) {
    console.log(b1 + " is the largest");
} else {
    console.log(c + " is the largest");
}

//5. Check whether a person is eligible to vote
let age = 20;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

//6. Check whether a year is a leap year
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) ||
    year % 400 === 0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}