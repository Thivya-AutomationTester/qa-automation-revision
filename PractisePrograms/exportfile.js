/* export let firstvariable=100;
export let secondvariable=20;
export function fun(){
    console.log("hi am in export")
} */

    let a1=200;
    let b1=300;
    let c1=400;
 function greet(){
    console.log("hi am in export")
}
export default function greetPeople(){
console.log("Welcome")
}
  /*   export {a1 as add,b1 as mul,c1 as sub} */
  export {a1,b1,c1,greet} ;