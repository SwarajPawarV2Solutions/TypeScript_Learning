function calculator() {
    function subtract(num1, num2) {
        return num1 - num2;
    }
    return subtract;
}
var sub = calculator();
console.log(sub(20, 5));
