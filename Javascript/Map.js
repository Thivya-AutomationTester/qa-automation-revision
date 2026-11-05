let person=new Map();
//add
person.set('Id',1)
person.set('name','Anu')
person.set('Age',45)
console.log(person)
//add 
person.set('age',44)
console.log(person)
//update 
person.set('age',22)
console.log(person)
//delete
console.log(person.delete('age'))
console.log(person)
//retrieve
console.log(person.get('Id'))
//Iterating
for(let [key,value] of person){
    console.log(key+" : "+value)
}
for(let v of person.values()){
    console.log(`values are : ${v}`)
}
for(let k of person.keys()){
    console.log(`keys are : ${k}`)
}
person.forEach((key,value)=>{
console.log(`key is ${key} and value is ${value}`)
})
//using object as key in map
let empName={name:'lia',age:20}
let mapUsingObjectKey=new Map();
mapUsingObjectKey.set(empName,"passed")
// new entry will be created because these are two different object references,
// even though their properties are the same.
mapUsingObjectKey.set({name:'lia',age:20},"Failed")
mapUsingObjectKey.set(empName.name,"Failed")
console.log(mapUsingObjectKey)
console.log('object as key: '+mapUsingObjectKey.get(empName))
console.log('object as key: '+mapUsingObjectKey.get(empName.name))
empName.name='jlie'
console.log(mapUsingObjectKey.get(empName.name))//undefined because name is still lia
console.log('object as key: '+mapUsingObjectKey.get(empName.name))//undefined
//find occurance of array elements
let arrayMap=[1,2,3,3,4,5,5,5,2,6]
let unique=new Map()
for(let k of arrayMap){
    if(unique.has(k)){
        unique.set(k,unique.get(k)+1)
    }
    else{
        unique.set(k,1)
    }
}
console.log(unique)
//has,delete,clear,size
let person1=new Map();
person1.set('name','krish')
person1.set('age',22)
person1.set('profession','player')
console.log(person1)
console.log(person1.has('age'))//true
console.log(person1.size)//3
console.log(person1.delete('age'))//true
console.log(person1.size)//2
console.log(person1.clear())//returns undefined
console.log(person1)//empty map