//Count occurances of each character in a string using map 
let word = 'reshmavjohn'
let wordMap = new Map()
for (let c of word) {
    if (wordMap.has(c)) {
        wordMap.set(c, wordMap.get(c) + 1) //or wordMap.set(c, (wordMap.get(c) || 0) + 1);
    }
    else {
        wordMap.set(c, 1)
    }
}
console.log(wordMap)

//Count word occurances in a sentence using map 
let sentence = "hello welcome to hello world"
sentence = sentence.split(' ');
let sentMap = new Map()
for (let c of sentence) {

    sentMap.set(c, (sentMap.get(c) || 0) + 1);

}
console.log(sentMap)

//Find first non-repeated character using map 
let example = "aabbcdde"
let exMap = new Map()
for (let s of example) {
    if (exMap.has(s)) {
        exMap.set(s, exMap.get(s) + 1)
    }
    else {
        exMap.set(s, 1)

    }
}
for (let i of example) {
    if (exMap.get(i) === 1) {
        console.log('First unique char is : ' + i)
        break;
    }
}
//Find first duplcate character using map
for (let i of example) {
    if (exMap.get(i) > 1) {
        console.log('First duplicate char is : ' + i)
        break;
    }
}

//Find unique characters in a string using map 
let word1 = 'reshmavjohn'
let wordMap1 = new Map()
for (let c of word1) {
    if (wordMap1.has(c)) {
        wordMap1.set(c, wordMap1.get(c) + 1)
    }
    else {
        wordMap1.set(c, 1)
    }
}
console.log(wordMap1)
let arr = []
for (let w of wordMap1.keys()) {
    if (wordMap1.get(w) === 1) {
        arr.push(w)
    }
}
console.log(arr)


let uniqueSEt = new Set()
let dupsEt = new Set()
for (let i of word) {
    if (!uniqueSEt.has(i)) {
        uniqueSEt.add(i)
    }
    else {
        dupsEt.add(i)
    }

}
//Remove all duplicates from an array using set 
console.log(uniqueSEt)
//Print only duplicates from an array using set
console.log(dupsEt)

