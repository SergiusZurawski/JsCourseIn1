
const fs = require("fs");
const zlib = require("zlib");
const Snooper = require("./snooperStream");

// Unzip and pipe into output file
const input = fs.createReadStream("MobyDick.gz");
const output = fs.createWriteStream("MobyDick.txt");

input.on("end", () => console.log("Reached the end of the input file"));

let snooper = new Snooper();

input.pipe(zlib.createGunzip()).pipe(snooper).pipe(output);