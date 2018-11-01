function arrayFilterDecorator(predicate) {
    return {
        ownKeys: (target) => {
            return Object.getOwnPropertyNames(target)
                         .filter(x => !target.propertyIsEnumerable(x) ||
                                      predicate(target[x]));
        },
        get: (target, property) => {
            if (!(property in target)) {
                return undefined;
            }

            let result = target[property];
            if (predicate(result)) {
                return result;
            }

            return undefined;
        },
    };
}

let data = [12, 34, 45, 67, 4, 9];

let evenData = new Proxy(
    data,
    arrayFilterDecorator(x => x % 2 == 0)
);

function outputArray(array) {
    for (let index in array) {
        console.log(`  array[${index}] = ${array[index]}`);
    }
}

console.log(`Filtered Data:`);
outputArray(evenData);
data.push(13);
data.push(32);
console.log(`After adding to source:`);
outputArray(evenData);
