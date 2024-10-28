function handleReset (currentGame) {
    // change game state
    currentGame.currentRound = 0;
    currentGame.board = new Array(9).fill(null);
    currentGame.gameFinish = false;

    // clear current board
    const allSquare = document.querySelectorAll('.square');
    const whoseTurn = document.querySelector('#whose-turn');
    for (let i of allSquare){
        if (i.firstChild){
            i.firstChild.remove()
        }
    }
    whoseTurn.innerHTML = 'Player 1 to Move';
}

export {handleReset}