// The invoking object contains the call site AND the call site determines the 'this' binding for regular functions.

class Test {
    constructor() {

    };

    execute() {
        console.log('execute():', this);
    }

    executeArrow = () => {
        console.log('executeArrow():', this);
    }
}

const test = new Test();

test.execute();
test.executeArrow();

const testObject = {
    execute: function execute() {
        console.log('executeObject:', this);
    }
};

testObject.execute();

console.log('main:', this);