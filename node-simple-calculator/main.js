const a = process.argv[2];
const b = process.argv[3];
const operator = process.argv[4];

const calc = require('./calc.js');
let result;

switch(operator) {
    case '+': {
        result = calc.add(a, b);
        break;
    }
    case '-': {
        result = calc.subtract(a, b);
        break;
    }
}

console.log(result);