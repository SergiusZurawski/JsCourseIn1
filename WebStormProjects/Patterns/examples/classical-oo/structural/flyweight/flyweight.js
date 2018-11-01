import {TextBox} from './textbox';
import {TextBoxShared} from './textbox-shared';

const boxCount = 10000;

let boxes = [];
console.log(`Creating ${boxCount} text boxes`);
for (let ii = 0; ii < boxCount; ii++) {
    let textBox = new TextBox();
    textBox.width = ii / 2;
    boxes.push(textBox);
}

console.log('Finished creating boxes');
console.log(`TextBox[123] has border color ${boxes[123].bordercolor}`);
console.log(`TextBox[123] has width ${boxes[123].width}`);


let boxesShared = [];
console.log(`Creating ${boxCount} shared text boxes`);
for (let ii = 0; ii < boxCount; ii++) {
    let textBox = new TextBoxShared();
    textBox.width = ii / 2;
    boxesShared.push(textBox);
}

console.log('Finished creating boxes');
console.log(`TextBox[123] has border color ${boxesShared[123].bordercolor}`);
console.log(`TextBox[123] has width ${boxesShared[123].width}`);
