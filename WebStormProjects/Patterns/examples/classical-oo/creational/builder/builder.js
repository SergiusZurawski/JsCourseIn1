import {TableBuilder} from './table-builder';
import buildTable from './builder-object';

document.body.append(
    new TableBuilder()
        .withTitle('Cool Movies')
        .withHeaders('Id', 'Title', 'Genres')
        .withRow().of(1, 'Predator', 'Action, Sci-Fi').and()
        .withRow().of(2, 'Hero', 'Action, Martial Arts').and()
        .withRow().of(3, 'Fallen', 'Thriller').and()
        .build()
);

document.body.append(document.createElement('hr'));

document.body.append(
    new TableBuilder()
        .withRow().of('Eamonn Boyle', 'Author')
        .build());

document.body.append(document.createElement('hr'));

document.body.append(
    buildTable({
        title: 'Cool Movies',
        headers: ['Id', 'Title', 'Genres'],
        rows: [
            [1, 'Predator', 'Action, Sci-Fi'],
            [2, 'Hero', 'Action, Martial Arts'],
            [3, 'Fallen', 'Thriller'],
        ],
    })
);
