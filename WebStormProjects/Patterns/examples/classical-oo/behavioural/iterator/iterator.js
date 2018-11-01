// Represents all numbers in the arithmetic series
// Each node is represented by the formula
//    a + (n-1)d
class ArithemticSeries {
    constructor(a, d) {
        this.a = a;
        this.d = d;
    }

    [Symbol.iterator]() {
        let start = this.a;
        const increment = this.d;
        return {
            next: () => {
                let result = {
                    value: start,
                    done: false,
                };
                start += increment;
                return result;
            },
        };
    }
}

console.log('--- Iterator ---');
let series = new ArithemticSeries(100, 10);
for (let value of series) {
    console.log(value);
    if (value > 200) {
        break;
    }
}
