
const fs = require("fs");
const zlib = require("zlib");

// Unzip and pipe into output file
const input = fs.createReadStream("MobyDick.gz");
const output = fs.createWriteStream("MobyDick.txt");

input.on("end", () => console.log("Reached the end of the input file"));

input.pipe(zlib.createGunzip()).pipe(output);
