async function step1(){

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("step1");
            resolve();
        }, 2000);
    });
}
async function step2(){
console.log("step2")
}
async function step3(){
console.log("step3")
}

 await step1()
 await step2()
await step3()