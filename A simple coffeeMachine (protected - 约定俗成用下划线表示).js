class CoffeeMachine {
    _waterAmount = 0;

    set waterAmount(value) {
        if (value < 0 ) {
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    get power() {
        return this._power;
    }

    constructor(power) {
        this._power = power;
    }
}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 10;
console.log(`The water amount is: ${coffeeMachine.waterAmount}, while the power is ${coffeeMachine.power}W.`);