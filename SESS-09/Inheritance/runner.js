import Employee from "./Employee.js";
import Manager from "./Manager.js";
import Person from "./Person.js";

let p1 = new Person("John", "Rambo", "1946-01-01");
console.log(p1.toString());

let e1 = new Employee("Jason", "Bourne", "1964-01-01", 5000);
console.log(e1.toString());

let m1 = new Manager("Dana", "Scully", "1968-01-01", 5000, 2000);
console.log(m1.toString());

// RAM = Heap + Stack
// Heap - Dynamical Memory
// Stack
