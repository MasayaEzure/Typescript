"use strict";
// getter と setter
class Person {
    constructor() {
        // プロパティ
        this._name = '';
        // readonly：外部からの変更不可、自クラスの中で自動生成される　
        this.code = "abc-def-g";
    }
    // setter
    set name(value) {
        if (value === '') {
            console.log('Error…');
        }
        else {
            this._name = value;
        }
    }
    // getter
    get name() {
        return this._name;
    }
}
let taro = new Person();
taro.name = 'taro';
console.log(taro.name);
console.log(taro.code);
// 代入不可
taro.code = "aaaaa";
