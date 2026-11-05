//synchronous execution
console.log("start the synchronous execution")
console.log("execute the inbetween code")
console.log("end the synchronous execution")

//asynchronous execution
function fun1(){
    console.log("I am in fun1")
}
function fun2(){
    console.log("I am in fun 2")
    let start=Date.now()
    let delay = 5000
    let end=start+delay;
    while(Date.now()<=end){

    }
}
function fun3(){
    console.log("I am in fun 3")
}
fun1()
setTimeout(fun2,2000)
fun3()


setTimeout(() => {
    console.log("connect to Db")
    setTimeout(() => {
         console.log("Fetch records")
         setTimeout(() => {
             console.log("close the connection")
         }, 1000);
    }, 1000);
}, 1000);