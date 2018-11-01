import {Thickness} from './thickness';

export class TextBox {
    constructor() {
        this.text = '';
        this.alinnment = 'left';
        this.backgroundcolor = 'black';
        this.foregroundcolor = 'white';
        this.bordercolor = 'black';
        this.height = 32;
        this.wdith = 64;
        this.margin = new Thickness(0, 0, 0, 0);
        this.padding = new Thickness(0, 0, 0, 0);
    }
}
