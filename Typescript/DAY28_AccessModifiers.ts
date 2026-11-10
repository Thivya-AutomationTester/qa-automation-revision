/* protected
class Animal {
    protected sound: string = 'Roar'
}
class Lion extends Animal {
    displayAnimalSound() {
        console.log(this.sound)
    }
}
let lion = new Lion()
lion.displayAnimalSound() */
/* private
class Tier {
    private sound: string = 'Roar';

    #action: string = 'walk'; // JavaScript private field (runtime privacy)

    displayAction() {
        console.log(this.#action);
    }
}

class Lowe extends Tier {
    displayAnimalSound() {
        //console.log(this.sound); // Cannot access: sound is private in Tier
    }
}

let lowe = new Lowe();
lowe.displayAnimalSound();

let act = new Tier();
act.displayAction();

*/

//Encapsulation
class Student {
    private _name: string;
    private _id: number;
    private _age: number;

       constructor(name: string, id: number, age: number) {
        this._name = name;
        this._id = id;
        this._age = age;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }


}
let student=new Student('Riya',23,33);
//student.id=44 //setters
console.log(student.id) //getters
