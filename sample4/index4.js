"use strict";
//  クラス
class Item {
    // ?：省略可能なパラメーター
    constructor(price, tax) {
        // パラメーターの指定有無の確認
        if (tax) {
            this.tax = tax;
        }
        else {
            this.tax = 10;
        }
        if (isFinite(price)) {
            this.price = price;
        }
        else {
            this.price = 0;
        }
    }
    getTax() {
        return Math.round(this.price * (this.tax / 100));
    }
}
let apple = new Item(200);
console.log(apple.getTax());
