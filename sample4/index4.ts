//  クラス
class Item {
    // プロパティの宣言
    private tax: number;
    private price: number;

    // ?：省略可能なパラメーター
    constructor(price: number, tax?: number) {
        // パラメーターの指定有無の確認
        if(tax) {
            this.tax = tax;
        } else {
            this.tax = 10;
        }

        if(isFinite(price)) {
            this.price = price;
        } else {
            this.price = 0;
        }
    }

    public getTax(): number {
        return Math.round(this.price * (this.tax / 100));
    }
}

let apple: Item = new Item(200);
console.log(apple.getTax());