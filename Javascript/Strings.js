let empName = 'RidhikaJohn'
console.log(empName.toUpperCase())
console.log(empName.toLowerCase())
console.log("anu".charAt(2))
console.log("anu".charAt(9))//charAt() is designed to return an empty string "" when the index is outside the string.
console.log(empName.indexOf('i'))
console.log(`Index of with Position: ` + empName.indexOf('i', 0))
console.log(`startsWith_Check: ` + "johnmaria".startsWith("john"))
console.log(`endsWith_Check: ` + "johnmaria".endsWith("maria"))
console.log(`replace_Word_check: ` + "johnmaria".replace("john", 'hello'))
console.log(`replace_Char_check: ` + "johnmaria".replace("a", 'z'))
console.log(`replaceAll_Char_check: ` + "laancay".replaceAll("a", 'z'))
console.log(`includes_check: ` + "hellovy".includes(empName[4]))
console.log(`substring_with_startIndex: ` + "julie".substring(2))
console.log(`substring_with_start-End_index: ` + "julie".substring(2, 4))
console.log(`length_check: ` + empName.length)
console.log(`specialCharactes_check: ` + "welcome \"People\"")
console.log(empName)
console.log(`slice check with no parameters for : ${empName} is ` + empName.slice())
//when negative index is there it calcluates -1 from last character ex:thiv here v gets -1,i gets -2
console.log(`slice check with negative startindex for : ${empName} is ` + empName.slice(-3, -1))
//when start index is greater than end index in substring and here as a result,it swaps end and start index
console.log(`substring check with greater startindex for : ${empName} is ` + "swetha".substring(6, 4))
//when start index is greater then in slice method it returns empty value
console.log(`slice startindex greater than endIndex : \"swetha\" is ` + "swetha".slice(6, 4))
//split
let splitWord = "helloworldo"
let splittedArry = splitWord.split("o")
console.log(splittedArry)
/*
delimiter in middle → values on both sides
delimiter at beginning → "" at beginning
delimiter at end → "" at end ex:[ 'hell', 'w', 'rld', '' ]
*/
//repeat
let stringValue = "*"
console.log(stringValue.repeat(80))
//charCodeAt
let value = "joahana"
console.log(value.charCodeAt(2))
console.log(value.charAt(2))
console.log(value.indexOf('h'))
//trim
let val = " ginger "
console.log(val.trimEnd())
console.log(" lisa hi  ".trimStart())
console.log(val.trim())
//padding
let padVal = "hello"
console.log(padVal.padStart(6, '*'))
console.log(padVal.padEnd(7, '*'))
//concatenate
let combineStrings = "hello"
//can pass n number of parameters in concat
console.log(combineStrings.concat(" Welcome", "to the world ", "365"))
//concat using +
console.log(combineStrings + " " + "World")
console.log(`My string using backticks ${combineStrings}`)

//programs
//1.get last word in a string

let word = "Hello Leute Guten morgen zum Institut"
let trimmedWord = word.trim();
let wordArr = trimmedWord.split(' ')
console.log(wordArr)
console.log('print all values->' + wordArr)
console.log('print only the last word->' + wordArr[wordArr.length - 1])

//2.reverse a string
let stringRev = "Malay"
let rev = ""
for (let char of stringRev) {
    rev = char + rev;
}
console.log(`The reversed string is:  ${rev}`)
console.log("play".split('').reverse().join('-'))
/*
| Method | Belongs to | Purpose |
| `split()` | **String** | String → Array |
| `reverse()` | **Array** | Reverse array |
| `join()` | **Array** | Array → String |

*/
//3.find number of characters in a string

let str = "juliana"
let charInStr = {}
for (let char of str) {
    //checks if this char is present in the object in if condition
    if (charInStr[char]) {
        charInStr[char]++
    }
    else {
        charInStr[char] = 1
    }

}
console.log(charInStr)
console.log("*".repeat(80))
//print unique characters alone
for (let i in charInStr) {
    if (charInStr[i] === 1) {

        console.log(i + " : " + charInStr[i])
    }
}
//4.print duplicate characters alone
for (let i in charInStr) {
    if (charInStr[i] > 1) {
        console.log("*".repeat(80))
        console.log(i + " : " + charInStr[i])
    }
}
//5.print first non repeated character
for (let i in charInStr) {
    if (charInStr[i] === 1) {
        console.log("*".repeat(80))
        console.log(i + " : " + charInStr[i])
        break
    }
}
//6.print first repeated character
for (let i in charInStr) {
    if (charInStr[i] > 1) {
        console.log("*".repeat(80))
        console.log(i + " : " + charInStr[i])
        break
    }
}

//7. find occurence of each word
let countWord = "Hello welcome hello to the hello world"
countWord = countWord.toLowerCase();
let split_countWord = countWord.split(' ');
let charCount = {};
for (let i of split_countWord) {
    if (charCount[i]) {
        charCount[i]++;
    }
    else {
        charCount[i] = 1;
    }
}
console.log(charCount)