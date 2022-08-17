class Rabbit {}
let rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit);

function Apple() {}
console.log(new Apple() instanceof Apple);

let arr = [1,2,3];
console.log(arr instanceof Array);
console.log(arr instanceof Object);

/*
Output:
True
True
True
True
*/

