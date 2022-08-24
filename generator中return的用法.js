function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

let a = g.next();
let b = g.return('foo');
let c = g.next();

console.log(a,b,c);

/*
{ value: 1, done: false }
 { value: 'foo', done: true }   //跳到foo这个变量已经结束了，所以是true
  { value: undefined, done: true }  //foo的下一个更是没有，所以还是true