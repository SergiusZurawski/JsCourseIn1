export class MathLibrary {
    constructor() {
        this.pi_value = 3.142;
    }

    add(lhs, rhs) {
        return lhs + rhs;
    }

    multiply(lhs, rhs) {
        return lhs * rhs;
    }

    getPi() {
        return this.pi_value;
    }
}
