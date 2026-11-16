import Person from "./Person.js";

export default class Employee extends Person {
    #salary;

    constructor(firstname, lastname, birthday, salary) {
        super(firstname, lastname, birthday); // constructor Person
        this.#salary = salary;
    }

    salary() {
        return this.#salary;
    }

    toString() {
        return `${super.toString()} ${this.salary()}`;
    }
}
