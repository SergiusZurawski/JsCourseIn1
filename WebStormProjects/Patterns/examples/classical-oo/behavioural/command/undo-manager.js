export class UndoManager {
    constructor() {
        this.undoCommands = [];
    }

    addUndo(undoCommand) {
        this.undoCommands.push(undoCommand);
    }

    undo() {
        if (this.undoCommands.length > 0) {
            let undoCommand = this.undoCommands.pop();
            undoCommand();
        }
    }
}
