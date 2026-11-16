console.log(`Square = ${calcTriangleSquare(3, 4, 5)}`);
console.log(`Square = ${calcTriangleSquare(5, 5, 5)}`);
console.log(`Square = ${calcTriangleSquare(6, 5, 5)}`);

function calcTriangleSquare(a, b, c) { // 1st step code parsing
    // formal variables / arguments
    // automatically: local function's variables
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

// let calcTriangleSquare = function(a, b, c) {
//     let p = (a + b + c) / 2;
//     return Math.sqrt(p * (p - a) * (p - b) * (p - c));
// }

