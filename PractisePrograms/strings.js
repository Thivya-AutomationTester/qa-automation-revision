let word="Juliana "
console.log(word.charCodeAt(5))
word=word.concat('sherin')
console.log(word)

let setnce="jia"
setnce=setnce.padStart(4,'*')
console.log(setnce)
setnce=setnce.padEnd(5,'*')
console.log(setnce)

//reverse a string
let text="madam"
let rev="";
for(let i of text){
    rev=i+rev
}
console.log(rev)

//get last word in a string
let longSentence = "Hello Leute Guten morgen zum Institut"
let longtxt=longSentence.split(" ")
let actualword=longtxt[longtxt.length-1]
console.log(actualword)

//find number of characters in a string
let testWord="sita ram"
let obj={}
for(let i of testWord){
    if(obj[i]){
        obj[i]++
    }
    else{
        obj[i]=1
    }
}
console.log(obj)

//find occurance of each word
let countWord = "Hello welcome hello to the hello world"
let object={}
let splitted=countWord.split(' ')
for(let i of splitted){
    if(object[i]){
        object[i]++
    }
    else{
        object[i]=1
    }
}
console.log(object)

//find unique characters
let testWord1="sita ram"
let obj1={}
for(let i of testWord1){
    if(obj1[i]){
        obj1[i]++
    }
    else{
        obj1[i]=1
    }
}
console.log(obj1)
for(let i of testWord1){
    if(obj1[i]===1){
        console.log(`${i} is the unique character`)
    }
    else if(obj1[i]>1){
        console.log(`${i} is the first repeating character`)
        break
    }
}