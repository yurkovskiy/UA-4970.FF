import Employee from "./Employee.js";

export default class Manager extends Employee {
    #bonus;
    
    // salary of manager it's base salary plus bonus

    constructor(firstname, lastname, birthday, salary, bonus) {
        super(firstname, lastname, birthday, salary);
        this.#bonus = bonus;
    }

    salary() {
        return super.salary() + this.#bonus;
    }
}
