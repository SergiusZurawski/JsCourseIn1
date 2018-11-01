const {print, printTitle} = require("./print");

let array = ["abc", 123, "def", 456];

printTitle("Original array");
print(array);

printTitle("For..in loop Array");
for (let index in array) {
    print(index);
}

printTitle("For..of loop Array");
for (let value of array) {
    print(value);
}

let employee = {
    name: "Dave",
    age: 34,
    salary: 30000.0,
    address: "10 Arcatia Road"
};

printTitle("For..in loop Object");
for (let member in employee) {
    print(member);
}

// *** This would be an error
// printTitle("For..of loop Object");
// for (let item of employee) {
//     print(value);
// }



