const module1 = require("./module1");
const module2 = require("./nested/module2");
const module3 = require("./nested/module3");

console.log("This is the main entry point");
console.log("But it can call required dependencies");

console.log("Module 1 says:" + module1());
console.log("Module 2 says:" + module2.message());

exports.answer = 42;
console.log("Even circular references supported: " + module3.answer());


const info = require("./data/info");
console.log("We can also import data: " + info.message);
console.log(JSON.stringify(info));


// Modules will be searched for in node_modules
// The files can be named using index.js
require("module4");