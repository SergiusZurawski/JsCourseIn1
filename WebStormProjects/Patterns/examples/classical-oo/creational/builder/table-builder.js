import {
    createTitle,
    createBody,
    createHead,
} from './table-elements';

class TableRowBuilder {
    constructor(parentBuilder) {
        this.parentBuilder = parentBuilder;
    }

    of(...data) {
        this.data = data;
        return this;
    }

    and() {
        if (this.data) {
            this.parentBuilder.addRow(this.data);
        }
        return this.parentBuilder;
    }

    build() {
        return this.and().build();
    }
}

export class TableBuilder {
    constructor() {
        this.rows = [];
    }

    withTitle(title) {
        this.title = title;
        return this;
    }

    withHeaders(...headers) {
        this.headers = headers;
        return this;
    }

    addRow(data) {
        this.rows.push(data);
    }

    withRow() {
        return new TableRowBuilder(this);
    }

    build() {
        let div = document.createElement('div');
        if (this.title && this.title.length > 0) {
            div.appendChild(createTitle(this.title));
        }

        let table = document.createElement('table');
        table.className = 'table';
        if (this.headers && this.headers.length > 0) {
            table.appendChild(createHead(this.headers));
        }
        if (this.rows.length > 0) {
            table.appendChild(createBody(this.rows));
        }

        div.appendChild(table);
        return div;
    }
}
