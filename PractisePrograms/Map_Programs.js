//Count occurances of each character in a string using map 
let text = "abbcda"
let wordMap = new Map();
for (let i of text) {
    if (wordMap.has(i)) {
        wordMap.set(i, wordMap.get(i) + 1)
    }
    else {
        wordMap.set(i, 1)
    }
}
console.log(wordMap)

//find duplicate characters in a string

for (let k of wordMap.keys()) {
    if (wordMap.get(k) > 1) {
        console.log(`${k} is duplicated`)
    }
}

//find first non repeating character

for (let k of wordMap.keys()) {
    if (wordMap.get(k) === 1) {
        console.log(`${k} is first non repeating character`)
        break
    }
}

//find first repeating character
let textMap = new Map()
for (let char of text) {
    if (textMap.has(char)) {
        console.log(`${char} is the first repeating character`);
        break;
    } else {
        textMap.set(char, 1);
    }
}

//find unique characters
for (let k of wordMap.keys()) {
    if (wordMap.get(k) === 1) {
        console.log(`${k} is unique character`)

    }
}

//Count occurances of each character in a string using map 
let word = "am good now am good"
let wordArray = word.split(" ")
let worddMap = new Map()
for (let a of wordArray) {
    if (worddMap.has(a)) {
        worddMap.set(a, worddMap.get(a) + 1)
    }
    else {
        worddMap.set(a, 1)
    }
}
console.log(worddMap)

//Create a Map containing three students and their marks.

let studentInfo = new Map([['Sherin', 98], ['Anu', 77], ['Lia', 69]])
console.log(studentInfo)

//Update one student’s marks and remove another student.
studentInfo.set('Anu', 54)
console.log(studentInfo)
studentInfo.delete('Lia')
console.log(studentInfo)

//Count character occurrences in "javascript" using a Map.

let wordToPlay = "javascript"
let countWord = new Map();
for (let char of wordToPlay) {
    countWord.has(char) ? countWord.set(char, countWord.get(char) + 1) : countWord.set(char, 1)

}
console.log(countWord)

//Find the first non-repeating character in "swiss" using a Map.

let country = "swiss"

let countryMap = new Map()

for (let char of country) {
    countryMap.has(char) ? countryMap.set(char, countryMap.get(char) + 1) : countryMap.set(char, 1)

}
console.log(countryMap)
for(let k of countryMap.keys()){

    if(countryMap.get(k)===1){
        console.log(`${k} is the first non repeating character`)
        break;
    }
}

//for of iteration check
let iteration=new Map([['name','sita'],['age',20]])
console.log(iteration)
iteration.forEach((value,key) =>console.log(key,value))
for([key,value] of iteration){
    console.log(key,value)
}