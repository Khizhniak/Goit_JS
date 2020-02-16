// const logItems = function(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(i + 1, "-", array[i]);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// //<======================>

// const calculateEngravingPrice = function(message, pricePerWord) {
// const wordArr = message.split(" ");
// let count = 0;
// for (let i = 0; i < wordArr.length; i++) {
//   count++;
// }
// return count*pricePerWord
// };

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

// //<======================>

// const formatString = function(string) {
// let smth = string.split("");

// if(smth.length > 40){
// do {
//   smth.pop()
// } while (smth.length > 40);
// smth.push("...")
//   return smth.join("")
// } else {
//  return string
// }
// };

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

// console.log(formatString('Curabitur ligula sapien.'));

// console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));

// //<======================>

// const checkForSpam = msg => {
//   const lower = msg.toLowerCase();
//   return lower.indexOf("spam") !== -1 || lower.indexOf("sale") !== -1;
// };

// console.log(checkForSpam("Latest technology news"));

// console.log(checkForSpam("JavaScript weekly newsletter"));

// console.log(checkForSpam("Get best sale offers now!"));

// console.log(checkForSpam("[SPAM] How to earn fast money?"));

// //<======================>

// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt("Enter the number/s:");
//   numbers.push(input);
// } while (input !== null);

// if (input == null) {
//   for (let i = 0; i < numbers.length; i++) {
//     total += Number(numbers[i]);
//   }
// }

// console.log(`Summ: ${total}`);