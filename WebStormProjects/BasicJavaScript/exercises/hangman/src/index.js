import {getRandomMovie} from "./movies";
import {HangmanView} from "./hangmanview";

const view = new HangmanView("hangmanView");

const livesText = document.getElementById("lives");
const guessesText = document.getElementById("guesses");
const progressText = document.getElementById("progress");

let movie = getRandomMovie();

progressText.innerHTML = movie;

function updateGame(e) {
    progressText.innerHTML = e.key;
}

document.onkeydown = updateGame;

view.redraw();