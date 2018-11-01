class UnorderedList {
    constructor() {
        this.div = document.createElement('div');
        this.header = document.createElement('h2');
        this.table = document.createElement('ul');
        this.div.appendChild(this.header);
        this.div.appendChild(this.table);
    }

    setTitle(title) {
        this.header.appendChild(
            document.createTextNode(title));
    }

    addItem(item) {
        this.table.appendChild(item);
    }

    node() {
        return this.div;
    }
}

function listItem(content) {
    let data = document.createElement('li');
    data.appendChild(document.createTextNode(content));
    return data;
}

export class UnorderedListFactory {
    createList() {
        return new UnorderedList();
    }

    createItem(content) {
        return listItem(content);
    }
}
