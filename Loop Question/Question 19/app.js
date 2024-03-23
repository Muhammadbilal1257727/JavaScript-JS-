function printWedge(initialStars) {
    for (let i = initialStars; i > 0; i--) {
        document.write('*'.repeat(i));
    }
}

function main() {
    const initialStars = parseInt(prompt("Enter the initial number of stars:"));
    printWedge(initialStars);
}

main()