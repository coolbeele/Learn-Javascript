class User {

    ['say' + 'Hi'] () {      //和sayHi() {}表达一样，两种不同的方法
        console.log('Hello');
    }
}

new User().sayHi();

