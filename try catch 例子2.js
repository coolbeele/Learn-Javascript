setTimeout(function() {
    try {
        noVariable;} catch (err) {
            console.log('只要内在函数内设置try catch就能顺利报错')
        }
    }, 1000);

/*
如下如果函数在try里面，整个code先运行try catch，
再运行其他函数，于是在发现错误之前就运行完了，
所以要在函数内设置try
*/