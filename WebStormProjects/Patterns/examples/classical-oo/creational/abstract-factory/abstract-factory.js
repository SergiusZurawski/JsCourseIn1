import {TableListFactory} from './table-list-factory';
import {UnorderedListFactory} from './unordered-list-factory';

class WebLanguageBuilder {
    constructor(factory) {
        this.factory = factory;
    }

    build() {
        let list = this.factory.createList();
        list.setTitle('Web Languages');
        list.addItem(this.factory.createItem('JavaScript'));
        list.addItem(this.factory.createItem('TypeScript'));
        list.addItem(this.factory.createItem('CoffeeScript'));
        list.addItem(this.factory.createItem('Java'));
        list.addItem(this.factory.createItem('C#'));
        return list.node();
    }
}

let webLanguageBuilder = new WebLanguageBuilder(new TableListFactory());
document.body.appendChild(webLanguageBuilder.build());

webLanguageBuilder = new WebLanguageBuilder(new UnorderedListFactory());
document.body.appendChild(webLanguageBuilder.build());
