function User(name) {
    this.name = name;
}

User.prototype.sayHi = function() {
    console.log(this.name);
}

let user = new User('John');
user.sayHi();

/*The code above is equal to the class User:

class User {
    constructor() {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
};

*/
