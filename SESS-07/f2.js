function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function doSomething(a, b, f) {
    return f(a, b);
}

console.log(doSomething(10, 20, add));
console.log(doSomething(10, 20, sub));
