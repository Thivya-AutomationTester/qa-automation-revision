console.log("step1")
console.log("step2")
setTimeout(()=>console.log("step3"),2000)
console.log("step4")

//callback hell
setTimeout(() => {
    console.log("step3")
    setTimeout(() => {
        console.log("inner step 1")
        setTimeout(() => {
            console.log("inner step 2")
        }, 4000)

    }, 1000)
}, 2000)

