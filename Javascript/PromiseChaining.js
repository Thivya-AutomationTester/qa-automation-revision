/* function step1(){
    return new Promise((resolve,reject)=>{
        console.log("step1")
        reject(20)
        resolve(10)
    })
}
step1().then((success)=>console.log(success)).catch(error=>console.log(error)).finally(()=>console.log("laststep")) */


/* function step1(){
   return new Promise((resolve,reject)=>{
        console.log("step1")
        resolve(10)
    })  
}
function step2(num){
   return new Promise((resolve,reject)=>{
        console.log("step2")
        resolve(num*2)
    })  
}
function step3(num){
   return new Promise((resolve,reject)=>{
        console.log("step3")
        resolve(num+10)
    })  
}
step1().
then((num)=> step2(num)).
then((result)=>step3(result)).
then((output)=>console.log(output)).
catch((error)=>console.log(error)) */

function step1(){
   return new Promise((resolve,reject)=>{
        console.log("step1")
        resolve(10)
    })  
}
function step2(num){
   return new Promise((resolve,reject)=>{
        console.log("step2")
        resolve(num*2)
    })  
}
function step3(num){
   return new Promise((resolve,reject)=>{
        console.log("step3")
        resolve(num+10)
    })  
}

// when we have multiple lines in arrow function and if one func is dependent on others then add return explicitly
step1().
then((num)=> {return step2(num)}).
then((result)=>{return step3(result)}).
then((output)=>{console.log(output)}).
catch((error)=>console.log(error))