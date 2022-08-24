let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            next() {
                if (this.current <= this.last) {
                    return {done: false, value: this.current++};    //它以 {value: ..., done: true/false} 的形式返回值
                } else {
                    return {done: true};
                }
            }
        }
    }
}

console.log([...range]);    // 迭代整个 range 对象，返回从 `range.from` 到 `range.to` 范围的所有数字
