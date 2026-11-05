//Remove duplicates from [5, 10, 5, 20, 10] using a Set.

let arr=[5, 10, 5, 20, 10]
let duplicateRemoval=new Set();
for(let a of arr){
    duplicateRemoval.add(a)
}
console.log(duplicateRemoval)

//Count unique browsers in ["Chrome", "Firefox", "Chrome", "Safari"].
let browsers=["Chrome", "Firefox", "Chrome", "Safari"]

let browSet=new Set()

for(let browser of browsers){
 browSet.add(browser)

}
console.log(browSet)
console.log("Unique browser count:", browSet.size);

//Find common numbers between [1, 2, 3] and [3, 4, 5] using a Set.

let setOne=[1,2,3]
let setTwo=[3,4,5]
let uniqueSet=new Set(setOne)
let dupSet=new Set()

for(let j of setTwo){
    if(uniqueSet.has(j)){
dupSet.add(j)
    }
}
console.log(dupSet)
//or

let duplicateSet=new Set(setTwo.filter(num=>uniqueSet.has(num)))
console.log(duplicateSet)

//Find values in [1, 2, 3] that are absent from [3, 4, 5].

let containerA=[1,2,3]
let containerB=[3,4,5]
let s1=new Set(containerB)
let s2=new Set(containerA.filter(num=>!s1.has(num)))
console.log(s2)