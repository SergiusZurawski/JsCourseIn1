const successMessage = "Well done!";
const deathMessage = "You're Dead!!!";

export class HangmanView {
    constructor(name) {
        this.canvas = document.getElementById(name);
        this.ctx = this.canvas.getContext("2d");
    }

    redraw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawGallows();
    }

    drawGallows() {
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(150, 180);
        this.ctx.lineTo(20, 180);
        this.ctx.lineTo(20, 20);
        this.ctx.lineTo(150, 20);
        this.ctx.stroke();

        this.ctx.lineWidth = 1;
        this.ctx.lineTo(150, 50);
        this.ctx.stroke();
    }
}