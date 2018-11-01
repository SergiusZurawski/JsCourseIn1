import {
    createTitle,
    createBody,
    createHead,
} from './table-elements';

export default function buildTable(data) {
    let div = document.createElement('div');
    if (data.title) {
        div.appendChild(createTitle(data.title));
    }

    let table = document.createElement('table');
    table.className = 'table';
    if (data.headers && data.headers.length > 0) {
        table.appendChild(createHead(data.headers));
    }
    if (data.rows && data.rows.length > 0) {
        table.appendChild(createBody(data.rows));
    }

    div.appendChild(table);
    return div;
}


