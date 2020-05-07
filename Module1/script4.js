let credits = 23580;
const pricePerDroid = 3000;

const dronsTotal = Number(prompt("How much drons do u want?"));

if(dronsTotal === null){
    alert("Отменено пользователем!");
} else {
    let totalMoney = pricePerDroid * dronsTotal;
    credits -= totalMoney
    if(totalMoney > credits){
        alert("Недостаточно средств на счету!");
    } else {
        alert(`Вы купили ${dronsTotal} дроидов, на счету осталось ${credits} кредитов.`);
    }};
