class User {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log('name to short');
            return
        }
        this._name = value;
    }
}

let user = new User('John');
console.log(user.name);         //let的类表达式要console.log才能显示

user = new User(''); //不是let的类表达式会自动output
