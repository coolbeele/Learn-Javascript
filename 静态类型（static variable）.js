/*

Static Method的含义 - 让this指向class本身
class User {
    static staticMethod() {
        console.log(this === User);
    }
}

User.staticMethod();

*/

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}

let articles = [
    new Article('Book1', new Date(2019,1,1)),
    new Article('Book2', new Date(2019,10,1)),
    new Article('Book3', new Date(2019,11,1))
]

articles.sort(Article.compare);

console.log(articles[0].title);