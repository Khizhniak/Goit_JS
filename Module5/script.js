// function
// const Account = function({login, email}) {
//   this.login = login;
//   this.email = email;
//};

// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, Email: ${this.email}`);
// };

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com


// ==================================

// class User {
//   constructor({
//     name,
//     age,
//     followers
//   }) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo = function () {
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
//   }
// }


// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });
// console.log(mango)

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// ==================================

// class Storage{
//     constructor(args){
//         this.item = args;
//     }
//     getItems(){
//         return this.item
//     }
//     addItem(elem){
//         this.item.push(elem)
//     }
//     removeItem(elem){
//         if(this.item.includes(elem))
//         this.item.splice(elem, 1)
//     }
// }

// const storage = new Storage([
//    'Нанитоиды',
//    'Пролонгер',
//    'Железные жупи',
//    'Антигравитатор',
//  ]);

//  const items = storage.getItems();
//  console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

//  storage.addItem('Дроид');
//  console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

//  storage.removeItem('Пролонгер');
//  console.log(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// ==================================

// class StringBuilder{
//     constructor(args){
//         this._value = args;
//     }
//     get value(){
//         return this._value;
//     }
//     append(str){
//         this._value += str
//     }
//     prepend(str){
//         this._value = str + this._value
//     }
//     pad(str){
//         this._value = str + this._value + str
//     }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

//========================

class Car {

    constructor(val) {
        this._speed = 0;
        this._price = val.price;
        this._maxSpeed = val.maxSpeed;
        this._isOn = false;
        this._distance = 0;
    }

    static getSpecs(car) {
        console.log(`MaxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`)
    }
    set price(val) {
        this._price = val;
    }
    get price() {
        return this._price;
    }

    turnOn() {
        this._isOn = true;
    }

    turnOff() {
        this._isOn = false;
        this._speed = 0;
    }

    accelerate(value) {
        if (this._speed + value < this._maxSpeed) {
            this._speed += value;
        } else {
            console.log('nonononono xD');
        }
    }

    decelerate(value) {
        if (this._speed - value > 0) {
            this._speed -= value;
        } else {
            console.log("again wrong");
        }
    }

    drive(hours) {
        if (this._isOn) {
            this._distance = hours * this._speed;
        }
    }
}

const mustang = new Car({
    maxSpeed: 200,
    price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000