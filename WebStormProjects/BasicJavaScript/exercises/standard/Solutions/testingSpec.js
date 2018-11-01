describe("Testing The Game Of Life Cell", function () {
    var neighbours;
    beforeEach(function () {
        neighbours = [
            new GameOfLifeCell([]),
            new GameOfLifeCell([]),
            new GameOfLifeCell([]),
            new GameOfLifeCell([]),
            new GameOfLifeCell([]),
            new GameOfLifeCell([]),
            new GameOfLifeCell([]),
            new GameOfLifeCell([])
        ];
    });
    it("Supports Safe Creation", function() {
        expect(GameOfLifeCell(neighbours)).toBeDefined();
    });
    it("Throws when it has too many neighbours", function() {
        neighbours.push(new GameOfLifeCell([]));
        var tst = function() { new GameOfLifeCell(neighbours); };
        expect(tst).toThrow();
    });
    it("Is dead by default", function () {
        var cell = new GameOfLifeCell(neighbours);
        expect(cell.getState()).toEqual("dead");
    });
    it("Can be made alive", function () {
        var cell = new GameOfLifeCell(neighbours);
        cell.makeAlive();
        expect(cell.getState()).toEqual("alive");
    });
    it("Can be made dead", function () {
        var cell = new GameOfLifeCell(neighbours);
        cell.makeAlive();
        expect(cell.getState()).toEqual("alive");
        cell.makeDead();
        expect(cell.getState()).toEqual("dead");
    });
    it("Becomes alive when three neighbours are alive", function () {
        var cell = new GameOfLifeCell(neighbours);
        neighbours[0].makeAlive();
        neighbours[1].makeAlive();
        neighbours[2].makeAlive();
        cell.changeState();
        expect(cell.getState()).toEqual("alive");
    });
    it("Starves when less than two neighbours are alive", function() {
        var cell = new GameOfLifeCell(neighbours);
        cell.makeAlive();
        neighbours[1].makeAlive();
        cell.changeState();
        expect(cell.getState()).toEqual("dead");
    });
    it("Is overcrowded when more than three neighbours are alive", function () {
        var cell = new GameOfLifeCell(neighbours);
        cell.makeAlive();
        neighbours[0].makeAlive();
        neighbours[1].makeAlive();
        neighbours[2].makeAlive();
        neighbours[3].makeAlive();
        cell.changeState();
        expect(cell.getState()).toEqual("dead");
    });
    it("Stays dead unless three neighbours are alive", function () {
        for (var x = 0; x <= 8; x++) {
            var cell = new GameOfLifeCell(neighbours);
            for (var y = 0; y < x; y++) {
                neighbours[y].makeAlive();
            }
            cell.changeState();
            if(x !== 3) {
                expect(cell.getState()).toEqual("dead");
            }
        }
    });
    it("Checks all its neighbours on state change", function () {
        var cell = new GameOfLifeCell(neighbours);
        for (var x = 0; x < 8; x++) {
            spyOn(neighbours[x], 'getState').and.callThrough();
        }
        cell.changeState();
        for (var y = 0; y < 8; y++) {
            expect(neighbours[y]['getState']).toHaveBeenCalled();
        }
    });
});