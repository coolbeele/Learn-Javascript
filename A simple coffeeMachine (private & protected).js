class CoffeeMachine {
    waterAmount = 0;

    constructor(power) {
        this.power = power;
        console.log(`Created a coffee-machine, power: ${power}`)
    }
}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200;