let range = {
    from: 1,
    to: 5,
    *[Symbol.iterator]() {      //*[Symbol.iterator]()意思是for..of range
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
}

console.log([...range]);