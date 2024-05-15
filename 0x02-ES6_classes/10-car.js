const symbolES = Symbol('cloneCar');

export default class Car {
    constructor(brand, motor, color) {
        this.brand = brand;
        this.motor = motor;
        this.color = color;
    }

    get brand() {
        return this._brand;
    }

    set brand(value) {
        if (typeof value === 'string') this._brand = value;
        else throw new TypeError('brand must be a string');
    }
    
    get motor() {
        return this._motor;
    }
    
    set motor(value) {
        if (typeof value === 'string') this._motor = value;
        else throw new TypeError('motor must be a string');
    }


    get color() {
        return this._motor;
    }
    
    set color(value) {
        if (typeof value === 'string') this._color = value;
        else throw new TypeError('color must be a string');
    }

    [symbolES]() {
        const cloneCar = new this.constructor(this._brand, this._motor, this._color);
        return cloneCar;

    }
    cloneCar() {
        return this[symbolES]();
    }
}