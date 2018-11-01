export class MathLibraryAdapter {
    constructor(mathLibrary) {
        this.mathLibrary = mathLibrary;
    }

    sum(lhs, rhs) {
        return this.mathLibrary.add(lhs, rhs);
    }

    product(lhs, rhs) {
        return this.mathLibrary.multiply(lhs, rhs);
    }

    difference(lhs, rhs) {
        return this.mathLibrary.add(lhs, -rhs);
    }

    getPi() {
        return this.mathLibrary.getPi();
    }
}
