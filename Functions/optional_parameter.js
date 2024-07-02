function add(num1, num2) {
    return num1 + num2;
}
// Function as Parameter
function calculator(fun) {
    console.log(fun(10, 20));
}
function display(id, name, role) {
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("role", role);
    }
}
display(1, "Swaraj");
calculator(add);
