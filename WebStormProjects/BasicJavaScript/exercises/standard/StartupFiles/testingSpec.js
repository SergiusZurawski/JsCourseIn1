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
});