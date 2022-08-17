class CoffeeMachine {
    #waterLimit = 200;

    #fixWaterAmount(value) {
        if (value <0) return 0;
        if (value > this.#waterLimit) return this.#waterLimit;
    }

    setWaterAmount(value) {
        this.#waterLimit = this.#fixWaterAmount(value);
    }
}

let coffeeMachine = new CoffeeMachine();
coffeeMachine.#fixWaterAmount(123);  //不行，不能从外部访问或改变private
coffeeMachine.#waterLimit = 1000;   //不行，不能从外部访问或改变private