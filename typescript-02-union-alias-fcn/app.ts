function add(n1: number, n2: number) {
    return n1 + n2;
}

// An example of just specifying a variable as type function only.
// let combineValues: Function;

// An example of specifying the input-output types of a function.

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5;
// combineValues = (num: number) => {console.log(number)};

console.log(combineValues(8, 8));


// An example of passing a callback function as an argument.
function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result);
}

addAndHandle(2, 3, (total) => {console.log(total)});

// An example of an error utility function. Throw will cancel the script, so technically a value is never producted.
function generateError(message: string, code: number): never {
// Throw an object as an error
    throw {message: message, errorCode: code };
}

generateError('An error occured!', 500);