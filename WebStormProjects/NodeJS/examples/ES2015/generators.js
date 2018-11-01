const {print, printTitle} = require("./print");

function log(title, generator) {
    printTitle(title);
    let next = generator.next();
    while (!next.done) {
        print(next.value);
        next = generator.next();
    }
}

function* fourToSix() {
    yield 4;
    yield 5;
    yield 6;
}

function* numbers() {
    yield 1;
    yield 2;
    yield 3;
    yield* fourToSix();
    yield 7;
    yield 8;
    yield 9;
}

function* wordPairs(string) {
    let words = string.split(" ");
    for (let index = 0; index < words.length - 1; index++) {
        yield [words[index], words[index + 1]];
    }
}

let generator1 = wordPairs("This is some text that we will parse.");
log("Simple generator", generator1);

printTitle("Delegating generator");
for (let number of numbers()) {
    print(number);
}

printTitle("Delegating generator mapped");
Array.from(numbers())
    .map(x => x * 2)
    .forEach(print);


