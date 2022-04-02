// getter と setter
class Person {
    // プロパティ
    private _name: string = '';
    // readonly：外部からの変更不可、自クラスの中で自動生成される　
    readonly code: string = "abc-def-g";

    // setter
    set name(value: string) {
        if (value === '') {
            console.log('Error…');
        } else {
            this._name = value;
        }
    }

    // getter
    get name(): string {
        return this._name;
    }

}

let taro: Person = new Person();
taro.name = 'taro';
console.log(taro.name);

console.log(taro.code);
// 代入不可
taro.code = "aaaaa";