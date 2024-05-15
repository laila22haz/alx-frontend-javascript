const symbolES = Symbol('cloneCar');

export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    [symbolES]() {
        const cloneCar = new this.constructor(this._brand, this._motor, this._color);
        return cloneCar;

    }
    cloneCar() {
        return this[symbolES]();
    }
}