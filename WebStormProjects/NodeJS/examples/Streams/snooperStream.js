const { Transform } = require('stream');

class Snooper extends Transform {
    constructor(options) {
        super(options);
        this.highWaterMark = 100;
    }

    _transform(chunk, encoding, callback) {
        console.log("Transforming chunk");
        let upperCaseOutput = chunk.toString().toUpperCase();
        this.push(upperCaseOutput);
        callback();
    }
}

module.exports = Snooper;