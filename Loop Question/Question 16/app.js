var num = parseFloat(prompt("Enter the initial value:"));
if (isNaN(num) || num <= 0) {
    document.write("Please enter a positive number.");
} else {
    while (num > 0) {
        document.write(num);
        num -= 0.5;
    }
}
