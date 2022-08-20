console.log(1 || 'xx');  //1代表正确，所以此处output 1
console.log(0 || 'xx');  //0代表错误，所以此处output xx
console.log(null || 'xx'); //null代表无，所以此处output有价值的xx
console.log(-1 || 'xx'); //-1是有价值的output，所以优先output-1
console.log('' || 'xx'); //''代表无，还是output xx

console.log('----------------');

console.log(1 ?? 'xx');  
console.log(0 ?? 'xx');   
console.log(null ?? 'xx'); 
console.log(-1 || 'xx'); 
console.log('' ?? 'xx'); 

/*

1
xx
xx
-1
xx
----------------
1
0
xx
-1

|| 判断默认赋值
？？判断0，空，和错误赋值

*/