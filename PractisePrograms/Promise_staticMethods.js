let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log("bigger version")
       resolve("p1-success")
    },1000)

})
let promise2=Promise.resolve("p2-success")

Promise.all([promise1,promise2]).
then(out=>console.log(out)).
catch(out=>console.log(out))

let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log("bigger version")
       reject("p3-rejected")
    },1000)

})
let promise4=Promise.resolve("p4-success")
//even if one promise failed it will return that failed result through catch block
Promise.all([promise3,promise4]).
then(out=>console.log('output through all:: '+ out)).
catch(out=>console.log('failure through all :: '+out))
//returns the status with reason if failed and status with value if passed :: it never goes to catch block
Promise.allSettled([promise3,promise4]).
then(out=>console.log(out))
//whoever first finishes its output will be catched it could be either pass or fail
Promise.race([promise3,promise4]).
then(out=>console.log('result through race pass:: '+out)).
catch(out=>console.log('result through race failure::'+out))
//the first passed promise will be returned through then block
Promise.any([promise3,promise4]).
then(out=>console.log('output through any::'+out)).
catch(out=>console.log(out))