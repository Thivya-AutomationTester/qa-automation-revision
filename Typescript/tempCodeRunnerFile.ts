
type calc={
    (a:number,b:number):number;
    (a:string,b:string):string;
};
const operations=((a:number|string,b:number|string):number|string=>{
if(typeof a==='number'&& typeof b==='number'){
    return a+b
}
if(typeof a==='string'&& typeof b==='string'){
    return a+b
}
throw new Error('Operation failed because of different data types')
}) as calc
console.log(operations(2,4))