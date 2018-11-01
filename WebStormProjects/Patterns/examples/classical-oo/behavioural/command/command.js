import {Calculator} from './calculator';
import {UndoManager} from './undo-manager';

const resultNode = document.getElementById('result');
const valueNode = document.getElementById('value');

let addEventHandlerToNode = (nodeName, handler) => {
    document.getElementById(nodeName).addEventListener(
        'click',
        handler
    );
};

let calculator = new Calculator();
let undoManager = new UndoManager();

let updateResult = () => {
    resultNode.innerHTML = calculator.value;
};

let getValue = () => {
    return parseFloat(valueNode.value);
};

addEventHandlerToNode('add', () => {
    let value = getValue();
    calculator.add(value);
    undoManager.addUndo(() => calculator.subtract(value));
    updateResult();
});

addEventHandlerToNode('subtract', () => {
    let value = getValue();
    calculator.subtract(value);
    undoManager.addUndo(() => calculator.add(value));
    updateResult();
});

addEventHandlerToNode('multiply', () => {
    let value = getValue();
    calculator.multiply(value);
    undoManager.addUndo(() => calculator.divide(value));
    updateResult();
});

addEventHandlerToNode('divide', () => {
    let value = getValue();
    calculator.divide(value);
    undoManager.addUndo(() => calculator.multiply(value));
    updateResult();
});

addEventHandlerToNode('undo', () => {
    undoManager.undo();
    updateResult();
});

updateResult();
