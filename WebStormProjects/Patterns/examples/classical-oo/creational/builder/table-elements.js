export function createTitle(title) {
    let titleContainer = document.createElement('h2');
    titleContainer.appendChild(
        document.createTextNode(title)
    );
    return titleContainer;
}

export function createTableHeader(title) {
    let titleContainer = document.createElement('th');
    titleContainer.appendChild(
        document.createTextNode(title)
    );
    return titleContainer;
}

export function createHead(headers) {
    let head = document.createElement('thead');
    headers.map(createTableHeader)
        .forEach(x => head.appendChild(x));
    return head;
}

export function createTableData(data) {
    let dataContainer = document.createElement('td');
    dataContainer.appendChild(
        document.createTextNode(data)
    );
    return dataContainer;
}

function createTableRow(data) {
    let row = document.createElement('tr');
    data.map(createTableData)
        .forEach(x => row.appendChild(x));
    return row;
}

export function createBody(rows) {
    let body = document.createElement('tbody');
    rows.map(createTableRow)
        .forEach(x => body.appendChild(x));
    return body;
}