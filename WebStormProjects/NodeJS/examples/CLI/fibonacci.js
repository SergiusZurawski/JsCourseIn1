function* infiniteFibonacci() {
    yield first = 1;
    yield second = 2;

    while (true) {
        const current = first + second;
        first = second;
        second = current;
        yield current;
    }
}

function* fibonacci(count) {
    let index = 0;
    for (let value of infiniteFibonacci()) {
        if (index === count) {
            break;
        }
        yield value;
        index++;
    }
}

function printUsage() {
    console.log(
`Prints the first n Fibonacci numbers.

Usage:
    node fibonacci <count>
    
    count - The number of entries to print
`);
}

let getCiArgumentCount = function () {
    return process.argv.length - 2;
};

if (require.main == module) {
    if (getCiArgumentCount() != 1) {
        printUsage();
        process.exit(1);
    }

    for (let value of fibonacci(parseInt(process.argv[2]))) {
        console.log(value);
    }
}

module.exports = fibonacci;