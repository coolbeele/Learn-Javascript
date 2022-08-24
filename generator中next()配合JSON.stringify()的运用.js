function* generateSequence() {  //* 表示它是一个 generator 函数
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();

let one = generator.next();
console.log(JSON.stringify(one));  //{"value":1,"done":false}

let two = generator.next();
console.log(JSON.stringify(two));  //{"value":2,"done":false}

let three = generator.next();
console.log(JSON.stringify(three));  //{"value":3,"done":true}