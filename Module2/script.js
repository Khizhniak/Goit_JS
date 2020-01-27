let userInput;
const numbers = [];
let total = 0;

do {
  userInput = prompt("Enter the number/s:");
  numbers.push(userInput);
} while (userInput !== null);

if (userInput == null) {
  for (let i = 0; i < numbers.length; i++) {
    total += Number(numbers[i]);
  }
}

console.log(`Summ: ${total}`);