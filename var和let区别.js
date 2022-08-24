function varTest() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x); //2
    }
    console.log(x); //2, 函数（）内的内容影响了全局内容
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;
        console.log(x); //2
    }
    console.log(x); //1, let只在函数（）内起作用，函数外的全局内容不受影响
}