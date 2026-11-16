function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    
    this.length = function() {
        return this.a + this.b + this.c;
    };
}

let t1 = new Triangle(3, 4, 5);
console.log(t1.length());