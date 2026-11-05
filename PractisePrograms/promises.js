let a = new Promise((resolve, reject) => {
    console.log("DB connected")
    resolve("readfiles")

})
console.log(a)
a.then((a)=>console.log(a)).catch((a)=>console.log(a)).finally(()=>console.log("clean up"))

let b = new Promise((resolve, reject) => {
    console.log("DB connected")
    reject("readfiles---failed")

})

b.then((a)=>console.log(a)).catch((a)=>console.log(a)).finally(()=>console.log("clean up"))

//Promise chaining

function step1(num){
    return new Promise((resolve,reject)=>resolve(10))
}
function step2(num){
    return new Promise((resolve,reject)=>reject(num*2))
}
function step3(num){
    return new Promise((resolve,reject)=>resolve(num+10))
}

step1().then(output=>{return step2(output)}).then(output=>{return step3(output)}).then(output=>console.log(output)).catch((a)=>console.log(a)).finally(()=>console.log("clean up"))

//Promise with async functions
function connectDB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("connected To DB");
            resolve()
        }, 1000)
    })
}
function fetchRecords() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Records fetched");
            resolve()
        }, 1000)
    })
}
function editRecords() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Record Edited");
            resolve()
        }, 1000)
    })
}
function closeDB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("connection closed");
            resolve()
        }, 1000)
    })
}
//When the function require arguments
connectDB().then(()=>fetchRecords()).then(()=>editRecords()).then(()=>closeDB()).catch()
//When the function does NOT require arguments
connectDB()
    .then(fetchRecords)
    .then(editRecords)
    .then(closeDB)
    .catch(error => console.log(error));
