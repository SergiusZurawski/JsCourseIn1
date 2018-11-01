import {CircleFactory, SquareFactory} from './shape-factories';

// Creating them all first to show distinct state
let shapes = [
    SquareFactory.create({x: 0, y: 0}),
    SquareFactory.create({x: 10, y: 20}),
    CircleFactory.create({x: 30, y: 40}),
    CircleFactory.create({x: 60, y: 70}),
];

shapes.forEach(x => x.draw());
