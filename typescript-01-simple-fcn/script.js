function add(num1, num2) {
    return num1 + num2;

    // JavaScript Solution:
    // if (typeof input1.value === 'number' && typeof input2.value === 'number') {
    //     return num1 + num2;
    // } else {
    //     // '+' is a shortcut for converting to number. But, only if string is made of digits.
    //     return +num1 + +num2;
    // }
}

const button = document.querySelector("button");

// When you access the value of an input element it's ALWAYS a string.
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");


document.querySelector("button").addEventListener("click", function() {
    // Strings gets concatenated
    const total = add(input1.value, input2.value);
  
    document.getElementById("total").value = total;
})