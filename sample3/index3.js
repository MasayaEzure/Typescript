"use strict";
// ジェネリック
const addMark = (message) => {
    return ('※ ' + message);
};
console.log(addMark(100));
let s = addMark('あいうえお');
console.log(s);
// ユニオンタイプ
let t;
t = 1234567;
t = '080-1234-5678';
console.log(t);
