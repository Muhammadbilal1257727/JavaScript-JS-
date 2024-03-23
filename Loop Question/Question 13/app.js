var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];
var table = document.createElement("table");
var headerRow = table.insertRow();
var studentHeader = headerRow.insertCell(0);
studentHeader.innerHTML = "<b>Student</b>";
var scoreHeader = headerRow.insertCell(1);
scoreHeader.innerHTML = "<b>Score</b>";
for (var i = 0; i < students.length; i++) {
    var row = table.insertRow();
    var studentCell = row.insertCell(0);
    studentCell.textContent = students[i];
    var scoreCell = row.insertCell(1);
    scoreCell.textContent = scores[i];
}
document.body.appendChild(table);
