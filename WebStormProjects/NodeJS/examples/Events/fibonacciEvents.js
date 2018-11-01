const fibonacci = require("../CLI/fibonacci");
const EventEmitter = require("events").EventEmitter;

let names = {
    start: 'start',
    next: 'next',
    complete: 'complete'
};

function fibonacciEmitter(count) {
    const event = new EventEmitter();
    const fibonacciSequence = fibonacci(count);

    process.nextTick(() => {
        event.emit(names.start);
        const interval = setInterval(() => {
            const next = fibonacciSequence.next();
            if (next.done) {
                event.emit(names.complete);
                clearInterval(interval);
            }
            else {
                event.emit(names.next, next.value)
            }
        }, 1000);
    });

    return event;
}

fibonacciEmitter.names = names;

module.exports = fibonacciEmitter;