function square(squareNum) {
    return squareNum;
}

console.log(square(5));



const greet = (name) => {
    return `Hello, ${name}!`;
}
console.log(greet());

function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}
const counter = outer();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
