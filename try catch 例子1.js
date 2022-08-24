try {
    console.log('开始执行try内容');

    console.log('try中的内容执行完毕');
} catch (err) {                                 //err在括号中是固定参数
    console.log('catch被忽略，因为没有error');
}