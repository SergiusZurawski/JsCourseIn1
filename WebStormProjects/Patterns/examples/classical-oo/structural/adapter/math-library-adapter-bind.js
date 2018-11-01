export class MathLibraryAdapter {
    constructor(mathLibrary) {
        this.mathLibrary = mathLibrary;
        this.sum = this.mathLibrary.add.bind(this.mathLibrary);
        this.product = this.mathLibrary.multiply.bind(this.mathLibrary);
        this.getPi = this.mathLibrary.getPi.bind(this.mathLibrary);
    }

    difference(lhs, rhs) {
        return this.mathLibrary.add(lhs, -rhs);
    }
}
