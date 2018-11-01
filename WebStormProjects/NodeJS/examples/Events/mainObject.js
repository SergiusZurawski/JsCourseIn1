const FibonacciEmitter = require("./fibonacciEventsObject");

const emitter = new FibonacciEmitter(10);

emitter.on(FibonacciEmitter.names.start, () => {
    console.log("Fibonacci sequence started emitted");
});

emitter.on(FibonacciEmitter.names.next, (value) => {
    console.log("Event emitted next value " + value);
});

emitter.on(FibonacciEmitter.names.complete, () => {
    console.log("Fibonacci sequence complete");
    process.exit(0);
});




