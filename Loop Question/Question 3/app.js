const userInput = +prompt('enter table number')
const times = +prompt('How many time do you want?')

for (let i = 1; i <= times; i++) {
    document.write(`${userInput} * ${i} = ${userInput*i} <br>`);
}