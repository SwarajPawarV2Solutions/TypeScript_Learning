var str: string | null = prompt("Enter the number");
if (str !== null) {
    let num: number = parseInt(str);

    console.log(num);
    console.log(typeof(num));

    if (!isNaN(num)) {
        if (num % 2 === 0) {
            alert("Number is Even");
        } else {
            alert("Number is Odd");
        }
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}
