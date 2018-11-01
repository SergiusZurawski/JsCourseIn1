import {Circle, Square} from './shapes';

class ShapeFactory {
    constructor(shape) {
        this.shape = shape;
    }

    create(position) {
        return Object.create(this.shape, {
            position: {value: position},
        });
    }
}

export const SquareFactory = new ShapeFactory(new Square());
export const CircleFactory = new ShapeFactory(new Circle());
