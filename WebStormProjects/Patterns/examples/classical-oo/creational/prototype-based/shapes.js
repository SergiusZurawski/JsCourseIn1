export class Square {
    draw() {
        console.log(
            `Drawing square as (${this.position.x}, ${this.position.y})`
        );
    }
}

export class Circle {
    draw() {
        console.log(
            `Drawing circle as (${this.position.x}, ${this.position.y})`
        );
    }
}
