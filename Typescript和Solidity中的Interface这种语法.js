/*
//接口初探

function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
  }

let myObj = {
    size: 10,
    label: 'Size 10 Object'
}

printLabel(myObj);

/*
无法运行是因为这是typescript的语法！这种在函数参数框（）中给参数的参数确定类型这件事可以通过interface完成
*/

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {
    size: 10,
    label: 'Size 10 Object'
}

printLabel(myObj);

//无法在js上运行，是因为这是typescript的语法！