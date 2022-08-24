function* gen() {
    let ask1 = yield "2+2 = ?";

    console.log(ask1);

    let ask2 = yield "3+3 = ?";

    console.log(ask2);
}

let generator = gen();

console.log(generator.next().value);    //2+2 = ?, 和4

console.log(generator.next(4).value);   //3+3 = ?，和6

console.log(generator.next(6).done);    //true