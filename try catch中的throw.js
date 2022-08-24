let json = '{"age":30}';

try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("数据不全：没有Name");   //新创建的error法syntaxError
    }
    console.log(user.name);
} catch (err) {
    console.log(err.message);     //这个地方扔出我们新创建的error法syntaxError
}