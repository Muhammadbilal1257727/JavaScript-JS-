var A = [24, 53, 78, 91, 12];
var largest = A[0];
var smallest = A[0];
for (var i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
    if (A[i] < smallest) {
        smallest = A[i];
    }
}
document.write("The largest number in the array is: " + largest + "<br>");
document.write("The smallest number in the array is: " + smallest);
