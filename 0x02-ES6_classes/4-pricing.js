import Currency from "./3-currency";

export default class Pricing {
    constructor(amount , currency) {
        this.amount = amount;
        this.currency = currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        if (typeof value === 'number') this._amount = value;
        else throw new TypeError('Amount must be a number');
    }

    get currency() {
        return this._currency;
    }
    
    set currency(value) {
        if (value instanceof Currency) this._currency = value;
        else throw new TypeError('Currency must be a currency');
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.displayFullCurrency()}`
    }

    static convertPrice(amount, conversionRate) {
        if (typeof amount === 'number' && typeof conversionRate === 'number')
            return amount * conversionRate;
        else throw new TypeError('Amount and ConversionRate must be numbers');
    }
}