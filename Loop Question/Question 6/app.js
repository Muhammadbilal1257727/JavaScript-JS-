var N = parseInt(prompt("Enter the number of items:"));
var items = [];
for (var i = 0; i < N; i++) {
    var item = prompt("Enter item " + (i + 1) + ":");
    items.push(item);
}
console.log("Items entered by the user:");
console.log(items);