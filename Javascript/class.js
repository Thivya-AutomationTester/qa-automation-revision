class Student{
name='ria';
    age=22;
    address='chennai';
     
    goesToSchool(){
        console.log(`the student ${this.name} goes to schoool`)
    }
}
class employee{
    empName;
    profession;
    constructor(name,postion){
        this.empName=name;
        this.profession=postion
    }
}
let a =new Student();
a.goesToSchool();

let b=new employee("sita","sdet");
console.log(b.empName)
let c=new employee("ram","qa");
console.log(c.empName)