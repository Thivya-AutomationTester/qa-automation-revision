/* single inheritance
class Parent{
    car():void{
        console.log('Parent has a car')
    }
}
class Child extends Parent{
     bike():void{
        console.log('child has a bike')
    }
}

let childObj=new Child();
childObj.car()
childObj.bike()
 */

//multi-level inheritance
/* class GrandParent{
    house():void{
        console.log('GrandParent has a house')
    }
}
class Parent extends GrandParent{
     car():void{
        console.log('Parent has a car')
    }
}
class Child extends Parent{
     bike():void{
        console.log('child has a bike')
    }
}

let childObj=new Child();
childObj.house()
childObj.car()
childObj.bike() */
/* 
//Hierarchical Inheritance
class Animal {
    eat(): void {
        console.log('animal eats')
    }
}
class Dog extends Animal {
    barks(): void {
        console.log('Dog barks')
    }
}
class Cat extends Animal {
    meows(): void {
        console.log('Cat meows')
    }
}
let cObj=new Cat();
cObj.eat()
cObj.meows()
let dObj=new Dog();
dObj.eat()
dObj.barks() */

//Multiple Inheritance through interface
/* interface bird{
    walk():void
}
interface human{
    walk():void
}
class Activities implements bird,human{
    walk(): void {
        console.log('walk is implemented inside Activities class')
    }
}
let obj=new Activities()
obj.walk() */
/* //Hybrid Inheritance-One class extends and implements at the sametime
interface characteristics {
    color: string;
}
class Features {
    capacity: number = 120;
    engine: string = 'Tata'
    takeoff(): void {
        console.log("Flight take off executed")
    }
}
class Ryan extends Features implements characteristics {
    color = 'white'
    reifen: number = 8
}
let fobj=new Ryan()
console.log(fobj.color)
console.log(fobj.reifen)
console.log(fobj.capacity)
fobj.takeoff() */

//method overriding
class Mediamarkt_Wien {
    sound(): void {
        console.log("parent class sound system")
    }
}
class Mediamarkt_Linz extends Mediamarkt_Wien {
    sound(): void {
        super.sound()
        console.log("child class sound system")
    }
}
let mobj = new Mediamarkt_Linz()
mobj.sound()

