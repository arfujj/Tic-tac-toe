import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();
document.querySelector(".restart")
.addEventListener("click",() => {
    onRestartClick();
})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click",() => {
        ontileClick(tile.dataset.index);

    })
})

function ontileClick(i) {
    game.makeMove(i);
    gameView.updateBoard(game);

}

function onRestartClick () {
    game = new Game();
    gameView.updateBoard(game);
}

gameView.updateBoard(game);





