/*
let user = {
    name: 'John',
    age: 30,

    toString() {
        return `{name: '${this.name}', age: ${this.age}}`;
    }
};

console.log(user);
*/

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
}

console.log(JSON.stringify(student));