/*
//method 1
// import {add, concat, sub} from './DAY21_exportfile.js'

console.log(add(2,4))
// console.log(concat('thivya',"karthik"))
// console.log(sub(4,3))

*/

/*
// using Alias name
 import {add as addition,sub,division as divmethod} from './DAY21_exportfile.js'

 console.log(addition(4,42))
 console.log(sub(4,42))
 console.log(divmethod(8,4))
 */
/*
//default import
import sumUp,{add,mul} from "./DAY21_exportfile.js"
 console.log(add(43,42))
 console.log(mul(4,2))
 console.log(sumUp(8,4))
 */
/*
//to import all
import * as operations from './DAY21_exportfile.js'

console.log(operations.add(2,2))
 console.log(operations.sub(4,3))
 console.log(operations.mul(6,4))
 let studObj=new operations.Student("ananya",23);
 studObj.displayDetails()*/

 //to import the default arrow func : give any name

 /*
 import sum,{mul} from './DAY21_exportfile.js'

console.log(sum(3,4))
console.log(mul(2,2))*/

//to import the default arrow func created in another way
 // we cannot use alias name for default func
 // but we can use any name to call it ::not the same name as in exported file
 import add from './DAY21_exportfile.js'
console.log(add(3,4))