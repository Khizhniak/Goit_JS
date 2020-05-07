const calculateEngravingPrice = function(message, pricePerWord) {
const wordArr = message.split(" ");
let count = 0;
for (let i = 0; i < wordArr.length; i++) {
  count++;
}
return count*pricePerWord
};

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120