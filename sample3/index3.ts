// ジェネリック
const addMark = <T>(message: T): string => { 
    return ('※ ' + message);
}
 
console.log(addMark<number>(100)); 

let s: string = addMark('あいうえお');
console.log(s);

// ユニオンタイプ
let t: number | string;
t = 1234567;
t = '080-1234-5678';

console.log(t);