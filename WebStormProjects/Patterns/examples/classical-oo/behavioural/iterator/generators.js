(function() {
    'use strict';

    function log(title, generator) {
        console.log('---', title, '---');
        let next = generator.next();
        while (!next.done) {
            console.log(next.value);
            next = generator.next();
        }
    }

    function* wordPairs(string) {
        let words = string.split(' ');
        for (let index = 0; index < words.length - 1; index++) {
            yield [words[index], words[index + 1]];
        }
    }

    let generator = wordPairs('This is some text that we will parse.');
    log('Simple generator', generator);

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

    generator = numbers();
    log('Delegating generator', generator);
}());
