
export class Person {
    #name: string;
    constructor(name: string) {
        this.#name = name;
    }

    getGreeting() {
        return `Hello! My name is ${this.#name}`;
    }
}

let p = new Person("Jake");
console.log(p.getGreeting());
