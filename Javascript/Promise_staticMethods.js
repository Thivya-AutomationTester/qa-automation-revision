/* //instead of creating new promise object and passing executor function inside it we can use promise static methods 

let resolvedPromise=Promise.resolve("hi-selected")
let rejectedPromise=Promise.reject("bye-rejected")
resolvedPromise.then((result)=>console.log(result))
rejectedPromise.then((result)=>console.log(result)).catch((result)=>console.log(result)) */

//more operations
/* function getResult(value) {
    let result = value * 2;        // Operation 1
    let finalResult = result + 10; // Operation 2

    if (finalResult > 20) {
        return Promise.resolve(finalResult);
    } else {
        return Promise.reject("Value is too small");
    }
}

getResult(5)
    .then(result => console.log(result))
    .catch(error => console.log(error)); */

/* Promise.any() is a JavaScript static method that takes multiple Promises and returns the result of the first Promise that fulfills successfully.
let p1 = Promise.reject("Failed 1");
let p2 = Promise.resolve("Success 2");
let p3 = Promise.resolve("Success 3");

Promise.any([p1, p2, p3])
    .then((result) => console.log(result))
    .catch((error) => console.log(error)); */

/* //Promise.all() is a static method that takes an array of Promises and returns a single Promise that fulfills with an array of results when all input Promises fulfill. If any input Promise rejects, the returned Promise rejects immediately with that rejection reason.
//Promise.all() succeeds only when all input Promises fulfill. Even one rejection causes the combined Promise to reject.
let p1 = Promise.resolve("Apple");
let p2 = Promise.reject("Banana");
let p3 = Promise.resolve("Mango");

Promise.all([p1, p2, p3])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error);
    }); */

/* Promise.allSettled() waits until all Promises have settled (fulfilled or rejected), not necessarily until every operation has stopped running.
- If a Promise fulfills, it returns its status and value.
- If a Promise rejects, it returns its status and reason.
- The combined Promise fulfills with an array of all outcomes, so a rejected input does not send it to .catch().

let p1 = Promise.resolve("Apple");
let p2 = Promise.reject("Banana");
let p3 = Promise.resolve("Mango");

Promise.allSettled([p1, p2, p3])
    .then((results) => {
        console.log(results);
    }); */

/* //Promise.race() is a static method that takes multiple Promises and returns a single Promise that settles as soon as the first input Promise settles, whether it fulfills or rejects.

let p1 = new Promise((resolve) => {
    setTimeout(() => resolve("Apple"), 3000);
});

let p2 = new Promise((resolve) => {
    setTimeout(() => resolve("Banana"), 1000);
});

let p3 = new Promise((resolve) => {
    setTimeout(() => resolve("Mango"), 2000);
});

Promise.race([p1, p2, p3])
    .then(result => console.log(result))
    .catch(error => console.log(error));

    let p4 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Apple failed"), 500);
});

let p5 = new Promise((resolve) => {
    setTimeout(() => resolve("cherry"), 1000);
});

Promise.race([p4, p5])
    .then(result => console.log(result))
    .catch(error => console.log(error)); */
