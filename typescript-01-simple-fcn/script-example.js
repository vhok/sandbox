// 1. Must explicitly state the type of element using "<variable>: <type>".
// 2. Detects script.js for duplicate names ie "add" function.
// 3. TypeScript is not sure if selected DOM element with ID will exist. Must use "!" to indicate the element will for sure be non-null value.
// 4. We can also specify what type of element we expect it to be using "as <element type>" ie type casting.
// 1 + 2
function add2(num1, num2) {
    return num1 + num2;
}
var tsButton = document.querySelector("button");
// 3 + 4
var tsInput1 = document.getElementById("num1");
var tsInput2 = document.getElementById("num2");
document.querySelector("button").addEventListener("click", function () {
    var total = add2(+tsInput1.value, +tsInput2.value);
    document.getElementById("total").value = String(total);
});
