import {Thickness} from './thickness';

export class TextBoxShared {
}

TextBoxShared.prototype = {
    text: '',
    alinnment: 'left',
    backgroundcolor: 'black',
    foregroundcolor: 'white',
    bordercolor: 'black',
    height: 32,
    wdith: 64,
    margin: new Thickness(0, 0, 0, 0),
    padding: new Thickness(0, 0, 0, 0),
};
