export default class Counter {
    static count = 0; // inside STACK
    constructor() {
        Counter.count++;                
    }
}

let c1 = new Counter();
let c2 = new Counter();
let c3 = new Counter();
let c4 = new Counter();

console.log(`Counters: ${Counter.count}`);
