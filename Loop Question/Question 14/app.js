var scores = [12, 45, 3, 22, 34, 50];
var stopValue = parseInt(prompt("Enter the stop value:"));
var stopIndex = scores.indexOf(stopValue);
if (stopIndex !== -1) {
    var slicedArray = scores.slice(0, stopIndex + 1);
    document.write("Numbers from start to " + stopValue + ": " + slicedArray.join(", "));
} else {
    document.write("Stop value not found in the array.");
}
