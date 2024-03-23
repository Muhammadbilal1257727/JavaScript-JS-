var product = 1;
for (var i = 1; i <= 7; i++) {
    if (i % 2 !== 0) {
        product *= i;
    }
}
document.write("The product of odd integers from 1 to 7 is: " + product);