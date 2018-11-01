const fibonacciEmitter = require("./fibonacciEvents");

const emitter = fibonacciEmitter(10);

emitter.on(fibonacciEmitter.names.start, () => {
    console.log("Fibonacci sequence started emitted");
});

emitter.on(fibonacciEmitter.names.next, (value) => {
    console.log("Event emitted next value " + value);
});

emitter.on(fibonacciEmitter.names.complete, () => {
    console.log("Fibonacci sequence complete");
    process.exit(0);
});




