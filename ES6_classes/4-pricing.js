import Currency from "./3-currency.js";

export default class Pricing {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }

    get amount() {
        return this._amount;
    }

    get currency() {
        return this._currency;
    }

    set amount(value) {
        if (typeof value !== 'number') {
            throw new TypeError('amount must be a number');
        }
        this._amount = value;
    }

    set currency(value) {
        if (!(value instanceof Currency)) {
            throw new TypeError('currency must be an instance of Currency');
        }
        this._currency = value;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.displayFullCurrency()}`;
    }

    static convertPrice(amount, convertionRate) {
        return amount * convertionRate;
    }
}
