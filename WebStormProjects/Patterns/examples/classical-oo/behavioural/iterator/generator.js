// Represents all numbers in the arithmetic series
// Each node is represented by the formula
//    a + (n-1)d
function* arithemticSeries(a, d) {
    let value = a;
    while (true) {
        yield value;
        value += d;
    }
}

console.log('--- Generator ---');
let series = arithemticSeries(100, 10);
for (let value of series) {
    console.log(value);
    if (value > 200) {
        break;
    }
}
