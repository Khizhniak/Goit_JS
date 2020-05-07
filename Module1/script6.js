let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Enter the number/s:");
  numbers.push(input);
} while (input !== null);

if (input == null) {
  for (let i = 0; i < numbers.length; i++) {
    total += Number(numbers[i]);
  }
}

console.log(`Summ: ${total}`);
