// // Structural approach
// function calcTriangleSquare(a, b, c) {
//     let p = (a + b + c) / 2;
//     return Math.sqrt(p * (p - a) * (p - b) * (p - c));
// }

// access modifiers: public / private / protected

class Triangle {
    #a
    #b
    #c
    constructor(a, b, c) {
        this.#a = a;
        this.#b = b;
        this.#c = c;
    }

    length() {
        return this.#a + this.#b + this.#c;
    }

    area() {
        let p = this.length() / 2;
        return Math.sqrt(p * (p - this.#a) * (p - this.#b) * (p - this.#c));
    }
}

let triangle_1 = new Triangle(3, 4, 5);
let triangle_2 = new Triangle(5, 5, 5);
console.log(triangle_1.length());
console.log(triangle_1.area());

