class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: string, b: string, c: number): string;

    add(a: number | string, b: number | string, c?: number): number | string {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        if (typeof a === "string" && typeof b === "string" ) {
            if (c !== undefined)
                return a + b + c
            return a + b;
        }
        throw new Error('Invalid args - different types')
    }


}

let calc = new Calculator();
console.log(calc.add(3, 4))
console.log(calc.add('Ram', 'Sita'))
console.log(calc.add('Ram', 'Sita', 10000))
//console.log(calc.add(7,'Sita'))//not valid
