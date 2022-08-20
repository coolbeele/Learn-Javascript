const obj = {
    hh: 'xxx'
}

let res = obj?.data?.list
console.log(res)

/*
obj?.data?.list 等价 obj&& obj.data && obj.data.list
用于简便的表达后者，以测试这个class里的东西都还是undefined状态
*/