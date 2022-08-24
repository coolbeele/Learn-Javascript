function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {
    yield* generateSequence(48, 57);    //0~9的字符代码是48~57
    yield* generateSequence(65, 90);    //A-Z的字符代码是65-90
    yield* generateSequence(97, 122);   //a-z的字符代码是97-122
}

let str = ' ';

for (let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}

console.log(str); // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
