class Animal {


    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }

}

let animal = new Animal('My animal');
console.log(animal.run(5));  //这句话是废话，会导致undefined

console.log('-------');

class Rabbit extends Animal {


    constructor(name, earLength) {
        super(name);         //子class的constructor中必须包括super(name),且不能重复些super（name）中的内容
        this.earLength = earLength;
    }

    hide() {
        console.log(`${this.name} hides`);
    }

    stop() {
        super.stop();   //super代表沿用父亲class
        this.hide();    //有了super，就必须些this作区分


    }
}

let rabbit = new Rabbit('White Rabbit');
rabbit.run(6);
rabbit.hide();
rabbit.stop();

console.log('-------');