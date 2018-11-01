const fibonacci = require("../CLI/fibonacci");
const EventEmitter = require("events").EventEmitter;

let names = {
    start: 'start',
    next: 'next',
    complete: 'complete'
};

class FibonacciEmitter extends EventEmitter {
    constructor(count) {
        super();
        const fibonacciSequence = fibonacci(count);

        process.nextTick(() => {
            this.emit(names.start);
            const interval = setInterval(() => {
                const next = fibonacciSequence.next();
                if (next.done) {
                    this.emit(names.complete);
                    clearInterval(interval);
                }
                else {
                    this.emit(names.next, next.value)
                }
            }, 1000);
        });
    }
}

FibonacciEmitter.names = names;

module.exports = FibonacciEmitter;