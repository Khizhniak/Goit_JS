const name = "Генератор защитного поля";
let price = 1000;


const task1 = function() {
  console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);
  price += 1000;
  console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);
};

console.log(task1());

