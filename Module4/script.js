const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

function Cashier(name, productDatabase) {
  this.name = name;

  this.productDatabase = products;

  this.customerMoney = 0;

  this.setCustomerMoney = function (value) {
    return this.customerMoney = value;
  };

  this.countTotalPrice = function (order) {
    let total = 0;
    for (key in order) {
      total += order[key] * productDatabase[key]
    }
    return total;
  };

  this.countChange = function (price, money) {
    if (money < price) {
      return price - money;
    } else {
      return null;
    }
  };

  this.onSuccess = function (change) {
    console.log(`Спасибо за покупку, ваша сдача ${change}!`);
  };

  this.onError = function () {
    console.log('You doesnt have money to buy anything..');
  };

  this.reset = function () {
    return this.customerMoney = 0;
  };
};