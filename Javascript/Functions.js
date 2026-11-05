//Normal function
function div(num1,num2){
     return num1/num2;
}
console.log(`Normal div function result`,div(33,3))
//Default Parameter
function defaultParam(div=4){
    console.log('Default parameter results')
    console.log('Num is ' + div)
}
defaultParam(44)
defaultParam()
//Function Expression
let func=function(a,b){
    return a+b
}
console.log(`Function Expression output is `+func(3,4));
//Arrow Function
let add=(c,d)=>{
    console.log(`the numbers are `,c,d)
return c+d;
}
console.log(`Arrow function with params and paranthesis ` +add(4,5))

let funcArrow=(a,b)=> a*b;
console.log(`Arrow function without paranthesis`,funcArrow(4,5))

let funcArrow_SingleParameter=a=>a*a
console.log(`Arrow function with single param`,funcArrow_SingleParameter(4));

//IIFE
(function(){console.log('Hi')})();
((a,b)=> console.log(a+b))(3,4);

//Call back Function
function fun1(){
    console.log('Page loaded')
}
function fun2(pageName,callback){
    console.log(pageName)
    callback();

}
fun2('Login',fun1)

//Lexical this in arrow function
const person={
    name:'ria',
    age:24,
    greeting:function(){
        console.log(this.name)
    }
}
person.greeting();

const person2={
    name:'riana',
    age:24,
    greeting: function() {
        (() => {
            console.log(this.name);
        })();
    }


}
person2.greeting();
