function GameOfLifeCell(neighbours) {
    if (!(this instanceof GameOfLifeCell)) {
        return new GameOfLifeCell(neighbours);
    }
    var numNeighbours = neighbours.length;
    if (numNeighbours > 8) {
        throw "Too many neighbours";
    }
    this.neighbours = neighbours;
    this._state = "dead";
    this.toString = function() {
        return "A Game Of Life Cell";
    }
    this.getState = function() {
        return this._state;
    };
    this.makeDead = function() {
        this._state = "dead";
    };
    this.makeAlive = function() {
        this._state = "alive";
    };
    this.changeState = function() {
        function countAliveNeighbours(neighbours) {
            var count = 0;
            neighbours.forEach(function(item) {
                if(item.getState() === "alive") {
                    count++;
                }
            });
            return count;
        }
        var count = countAliveNeighbours(neighbours);
        if (this._state === "dead") {
            if (count === 3) {
                this.makeAlive();
            }
        } else if (this._state === "alive") {
            if (count > 3 || count < 2) {
                this.makeDead();
            }
        }
    };
}