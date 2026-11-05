const arr=["apple", "banana", "mango"]

arr.map(ele=>console.log(ele.toUpperCase()))

const num=[20, 55, 80, 40]
const result=num.filter(n=>n>20)
console.log(result)

let sum= [5, 10, 15, 20]
let value=sum.reduce((acc,e)=>e+acc,0)
console.log(value)

let student=[{name: "Asha", marks: 75}, {name: "Ravi", marks: 90}]

console.log(student.find((m)=>m.marks>80))
//returns true if atleast one element matches
let item=[{name: "Pen", stock: 5}, {name: "Book", stock: 0}]
console.log(item.some(ele=>ele.stock===0))
//returns boolean if all elements matches
let products=[{name: "Pen", stock: 5}, {name: "Book", stock: 0}]
console.log(products.every(ele=>ele.stock===0))
let allNum=[2, 4, 6]
console.log(allNum.every((ele)=>ele>0))    

//slice-non mutate method
let arrayEle=[10, 20, 30, 40, 50]
let res=arrayEle.slice(-3)
console.log(res)

//splice-remove second item -mutate method
let arrSplice=["Apple", "Banana", "Mango"]
arrSplice.splice(1,1)
console.log(arrSplice)

//sort-mutate method
let emp=[{name: "Asha", salary: 60000}, {name: "Ravi", salary: 45000}]
emp.sort((a,b)=>a.salary-b.salary)
console.log(emp)

//filter and map-non mutate method

let studentsInfo=[{name: "Asha", marks: 75}, {name: "Ravi", marks: 30}]
let resultArr=studentsInfo.filter(a=>a.marks>=35).map(b=>b.name)
console.log(resultArr)
//callback
function add(a,b){
    console.log( a+b);
}
function funAdd(a,callback){
    console.log(a)
    callback(2,3)
}
funAdd(1,add)

let sentence="playwright is a tool"
sentence=sentence.split(" ")
let newSentence=""
for(let word of sentence){
    newSentence+=word.substring(0,1).toUpperCase()+word.substring(1)+" "
}
console.log(newSentence)

let sent="I am a I am a student"
sent=sent.split(" ")
let countOfSent=new Map()
for(let i of sent){
    countOfSent.set(i,(countOfSent.get(i)||0)+1)
}
console.log(countOfSent)

let wordToreverse="thivya hello world"
wordToreverse=wordToreverse.split(" ")
let reversedArray=wordToreverse.reverse();
let singleWord="";
console.log(wordToreverse.reverse());
for(let i=0;i<reversedArray.length;i++){
    for(let j of reversedArray[i]){
 singleWord=j+singleWord;
    }
   
    
   
}
console.log(singleWord)

let str="success"
let mostfreqChar=new Map()
for(let s of str){
    mostfreqChar.set(s,(mostfreqChar.get(s)||0)+1)
}

console.log(mostfreqChar)
let maxOccur="";
let maxChar="";
for(let i of mostfreqChar.keys()){
if(mostfreqChar.get(i)>maxOccur){
    maxOccur=mostfreqChar.get(i)
    maxChar=i
}
}
console.log(maxChar)

