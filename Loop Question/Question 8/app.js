var A = ["cake", "apple pie", "cookie", "chips", "patties"];
function searchItem(item) {
    for (var i = 0; i < A.length; i++) {
        if (A[i] === item) {
            return true;
        }
    }
    return false;
}
var userInput = prompt("Enter the item to search:");
if (searchItem(userInput)) {
    alert("Yes, '" + userInput + "' is found in the list.");
} else {
    alert("No, '" + userInput + "' is not found in the list.");
}
