export class Calculator {
    constructor() {
        this.value = 34;
    }

    add(value) {
        this.value = this.value + value;
    }

    subtract(value) {
        this.value -= value;
    }

    multiply(value) {
        this.value *= value;
    }

    divide(value) {
        this.value /= value;
    }
}
