class TableList {
    constructor() {
        this.table = document.createElement('table');

        this.createHead();

        this.body = document.createElement('tbody');
        this.table.appendChild(this.body);
    }

    createHead() {
        this.head = document.createElement('thead');
        this.titleContainer = document.createElement('th');
        this.head.appendChild(this.titleContainer);
        this.table.appendChild(this.head);
    }

    setTitle(title) {
        this.titleContainer.appendChild(
            document.createTextNode(title));
    }

    addItem(item) {
        this.body.appendChild(item);
    }

    node() {
        return this.table;
    }
}

function tableRow(content) {
    let row = document.createElement('tr');
    let data = document.createElement('td');
    data.appendChild(document.createTextNode(content));
    row.appendChild(data);
    return row;
}

export class TableListFactory {
    createList() {
        return new TableList();
    }

    createItem(content) {
        return tableRow(content);
    }
}
