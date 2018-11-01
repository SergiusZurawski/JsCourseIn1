const {print, printTitle} = require("./print");

let doAfter = function (step, delay) {
    return new Promise((resolve, reject) => {
        console.log("Step " + step);
        setTimeout(() => resolve(step), delay);
    });
};

doAfter(1, 1000)
    .then(step => doAfter(++step, 1000))
    .then(step => doAfter(++step, 1000))
    .then(step => doAfter(++step, 1000))
    // .then(() => Promise.reject("Some error"))
    .then(step => doAfter(++step, 1000))
    .then(step => doAfter(++step, 1000))
    .catch(error => console.log("Error occurred " + error));

(async () => {
    try {
        let step = await doAfter(1, 1000);
        step = await doAfter(++step, 1000);
        step = await doAfter(++step, 1000);
        step = await doAfter(++step, 1000);
        // await Promise.reject("Some error");
        step = await doAfter(++step, 1000);
        step = await doAfter(++step, 1000);
    }
    catch (error) {
        console.log("Error occurred" + error);
    }
})();