const whoseTurn = document.querySelector('#whose-turn');

function handleClick (currentGame, container, location) {
    if (!currentGame.gameFinish){ 
        if (container.hasChildNodes()){
            return;
        }
        const icon = showIcon(currentGame, container);
        const winner = updateGame(currentGame, location, icon);
        const whoPlayNext = player1Turn(currentGame.currentRound) ? '1' : '2';
        whoseTurn.innerHTML = whoseTurn.innerHTML.replace(/[1,2]/, whoPlayNext);
        whoseTurn.innerHTML = winner ? `🎉 ${winner} WON 🎉` : whoseTurn.innerHTML;   
    }      
};

function updateGame (currentGame, location, icon) {
    currentGame.currentRound += 1; 
    currentGame.board[location] = icon; 
    const gameFinish = getWinner(currentGame);
    return gameFinish;
}



function showIcon (currentGame, container) {
    const currentIcon = showRoundIcon(player1Turn(currentGame.currentRound));
    const clickContainer = document.createElement('div');
    clickContainer.classList.add('clickedSquare');
    clickContainer.innerHTML = currentIcon;
    container.appendChild(clickContainer); 
    return currentIcon;
}

function player1Turn (num){
    return num % 2 == 0 ? true : false;
}

function showRoundIcon (player1Turn){
    return player1Turn ? 'O' : 'X'; // player 1: 'O', player 2: 'X'
};

function getWinner (currentGame){
    const allowedLine = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    
    for (let i = 0; i < allowedLine.length; i++) {
        const [a, b, c] = allowedLine[i];
        if (currentGame.board[a] && currentGame.board[a] === currentGame.board[b] && currentGame.board[a] === currentGame.board[c]) {
            currentGame.gameFinish = true;
            
            if (currentGame.board[a] === 'O'){
                return 'Player 1'
            } else {
                return 'Player 2'
            }
            
        }
      }
      return null;  
}



export {handleClick};