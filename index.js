import { handleClick } from "./playGame.js";
import { handleReset } from "./restart.js";

let game = {
    currentRound: 0,
    board: new Array(9).fill(null),
    gameFinish: false
};

// Board lay out:
// 0, 1, 2
// 3, 4, 5
// 6, 7, 8

const allSquare = document.querySelectorAll('.square');
for (let i = 0; i < allSquare.length; i++){
    const square = allSquare[i];
    square.addEventListener('click', ()=>handleClick(game, square, i))
}

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', ()=>handleReset(game))

