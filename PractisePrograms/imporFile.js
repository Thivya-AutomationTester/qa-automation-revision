/* import { firstvariable,secondvariable,fun  } from "./exportfile.js";

console.log(firstvariable)
console.log(secondvariable)
fun() */

/* import {add as addition,mul,sub} from './exportfile.js'
console.log(addition,mul,sub) */

import * as calc from './exportfile.js'

console.log(calc.a1)
console.log(calc.b1)
calc.greet()

calc.default()//to import default file