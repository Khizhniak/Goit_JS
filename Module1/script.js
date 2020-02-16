// const name = "Генератор защитного поля";
// let price = 1000;


// const task1 = function() {
//   console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);
//   price += 1000;
//   console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);
// };

// console.log(task1());

// //<======================>
// console.warn("<======================>");


// const total = 100;
// const ordered = 50;

// if(total < ordered){
//   console.log("На складе недостаточно твоаров!");
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// };


// //<======================>
// console.warn("<======================>");


// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// let userInput = prompt("Give password");

// message = userInput

// if(userInput == null){
//   message = "Oтмененно пользователем!"
// } else if(userInput === ADMIN_PASSWORD){
//   message = "Добро пожаловать!"
// } else {
//   message = "Доступ запрещен, неверный пароль!";
// };

// alert(message);


// //<======================>


// let credits = 23580;
// const pricePerDroid = 3000;

// const dronsTotal = Number(prompt("How much drons do u want?"));

// if(dronsTotal === null){
//     alert("Отменено пользователем!");
// } else {
//     let totalMoney = pricePerDroid * dronsTotal;
//     credits -= totalMoney
//     if(totalMoney > credits){
//         alert("Недостаточно средств на счету!");
//     } else {
//         alert(`Вы купили ${dronsTotal} дроидов, на счету осталось ${credits} кредитов.`);
//     }};


// //<======================>


// const userCountry = prompt("Emter your country").toLowerCase();


// switch (userCountry) {
//     case "китай":
//         console.log(`Доставка в ${userCountry} будет стоить 100 кредитов`)
//         break;
//     case "чили":
//         console.log(`Доставка в ${userCountry} будет стоить 250 кредитов`)
//         break;
//     case "австралия":
//         console.log(`Доставка в ${userCountry} будет стоить 170 кредитов`)
//         break;
//     case "индия":
//         console.log(`Доставка в ${userCountry} будет стоить 80 кредитов`)
//         break;
//     case "ямайка":
//         console.log(`Доставка в ${userCountry} будет стоить 120 кредитов`)
//         break;
//     default:
//         alert("В вашей стране доставка не доступна")

// };

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




// Проверять по одному, потому что будут ошибки
