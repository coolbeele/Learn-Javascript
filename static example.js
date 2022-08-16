class Article {
    constructor(title,date) {
        this.title = title;
        this.date = date;
    }

    static createTodays() {    //static就是一个给之后class调用的后缀，没有static会显示错误
        return new this('Today\'s Digest', new Date());
    }
}

let article = Article.createTodays();

console.log(article.title);