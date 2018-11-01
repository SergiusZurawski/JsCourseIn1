function printTitle(title) {
    console.log(`--- ${title} ---`);
}

function print(text) {
    console.log(text);
}

function printObject(object) {
    for (propName in object) {
        print(`${propName} has value ${object[propName]}`)
    }
}

module.exports = {
    printTitle,
    printObject,
    print
};