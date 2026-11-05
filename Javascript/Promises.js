
// setTimeout(() => {
//     console.log("Step 1")
//     setTimeout(() => {
//         console.log("Step 2")
//         setTimeout(() => {
//             console.log("Step 3")
//             setTimeout(() => console.log("Step 4"), 2000)
//         }, 1000)
//     }, 1000)
// }, 1000)


/*
//the first parameter is always resolve
let prm=new Promise((r)=>{
    r('hello')
    
})
console.log(prm)//it returns the promise object
let promi=new Promise((s)=>{
    s('resolved:: bye')
    
})
console.log(promi)*/
    let callReject=new Promise((a,b)=>{
        let s=false
        if(s){ a('am succeeded')}
    else{
        b({id:100,status:'am rejected'})//can return string or objects...
    }
    })

callReject.then(b=>console.log(b)).catch((a)=>{
    console.log(a)
})//to get actual value either use then or catch

/*
function connectDB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {console.log("connectDB")
        resolve()}, 1000)
        
    })
}
function fetchRecords() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {console.log("fetchRecords")
        resolve()}, 3000)
        
    })
}
function editRecords() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {console.log("records edited")
        resolve()}, 2000)
        
    })
}
function closeDB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {console.log("DB disconnected")
        resolve()}, 1000)
        
    })
}
connectDB().then(fetchRecords).then(editRecords).then(closeDB)
*/

// function errorHandler(error){
//     console.log(error)
// }

// function loadDashboard(callback){
//     callback("eror occured")
// }

// loadDashboard(errorHandler)
