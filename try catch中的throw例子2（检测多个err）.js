//先搞懂在整个要测试的try catch框架前用一个函数readData包起来可以检测除了一种错误以外的多种错误

function readData() {
    let json = '{ "age": 30 }';
  
    try {
      // ...
      blabla(); // error!
    } catch (err) {
      // ...
      if (!(err instanceof SyntaxError)) {
        throw err; // 再次抛出（不知道如何处理它）
      }
    }
  }
  
  try {
    readData();
  } catch (err) {
    alert( "External catch got: " + err ); // 捕获了它！
  }
  