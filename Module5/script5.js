
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