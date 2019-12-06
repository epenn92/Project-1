let headerArea = document.querySelector('header');
let mainContent = document.querySelector('body');
let playArea = document.querySelector('main');
let playerIndicator = document.querySelector('.playerIndicator');
let playerOneText = document.querySelector('.playerOneText');
let playerTwoText = document.querySelector('.playerTwoText');

let gameTurns = 0;
// starting page function
landingPageStart = function () {
    headerArea.textContent = "Welcome to CONNNECT 4 DOTS!!";
    let playerVsPlayer = document.createElement('button');
    playerVsPlayer.classList.add('landingPage');
    playerVsPlayer.textContent = "Player VS Player";
    playArea.append(playerVsPlayer);
    playerVsPlayer.addEventListener('click', function () {
        createGameColumn();
        createGameElements();
        removeLandingPage();
    });

    let playerVsComputer = document.createElement('button');
    playerVsComputer.classList.add('landingPage');
    playerVsComputer.textContent = "Player VS CPU";
    playArea.append(playerVsComputer);
    playerVsComputer.addEventListener('click', function () {
        // createGameColumn();
        // createGameElements();
    });

    let learningMode = document.createElement('button');
    learningMode.classList.add('landingPage');
    learningMode.textContent = "Learning Mode";
    playArea.append(learningMode);
    playArea.addEventListener('click', function () {
        // createGameColumn();
        // createGameElements();
    });

    let howToPlay = document.createElement('button');
    howToPlay.classList.add('landingPage');
    howToPlay.textContent = "How To Play";
    playArea.append(howToPlay);
    howToPlay.addEventListener('click', function () {
        window.open("http://www.ludoteka.com/connect-4.html", "_blank");
    });

}

removeLandingPage = function () {
    $('.landingPage').hide();
}

landingPageStart();


// function whichPlayerTurn(player) {
//     if (player === 1) {
//         createPlayerTurn.textContent = "Player 1's Turn";
//         createPlayerTurn.classList.add('playerOneIndicator');
//         createPlayerTurn.classList.remove('playerTwoIndicator');
//     }
//     else {
//         createPlayerTurn.textContent = "Player 2's Turn";
//         createPlayerTurn.classList.add('playerTwoIndicator');
//         createPlayerTurn.classList.remove('playerOneIndicator');
//     }
// }



// let intro = document.createElement('div');
// intro.textContent = "CONNECT 4 DOTS THE GAME";
// mainContent.append(intro);
// takes me to the game
createGameColumn = function () {
    for (let i = 0; i < 7; i++) {
        let gameColumn = document.createElement('ol');
        gameColumn.className = `columns${i}`;
        // gameColumn.className = "columns";
        gameColumn.addEventListener('click', userSelection);
        playArea.append(gameColumn);
    }
    let playGameColumns = document.querySelectorAll('ol');
    playGameColumns.forEach(function () {
        for (let i = 0; i < playGameColumns.length; i++) {
            let createGameRow = document.createElement('li');
            createGameRow.className = "rows";
            playGameColumns[i].append(createGameRow);
        }
    });
}



// let createPlayerTurn = document.createElement('h2');
// let createPlayerOne = document.createElement('h1');
// createPlayerOne.classList.add('playerOneIndicator');
// createPlayerOne.textContent = "Player 1";
// headerArea.append(createPlayerOne);
// headerArea.append(createPlayerTurn);
// let createPlayerTwo = document.createElement('h1');
// createPlayerTwo.classList.add('playerTwoIndicator');
// createPlayerTwo.textContent = "Player 2";
// headerArea.append(createPlayerTwo);
// whichPlayerTurn(player);
createGameElements = function () {
    headerArea.textContent = "May the best player win";
    let createRestartButton = document.createElement('button');
    createRestartButton.classList.add('restartGameButton');
    createRestartButton.textContent = "Restart Game";
    createRestartButton.addEventListener('click', function () {
        blankGameState();
    })
    document.querySelector('header').append(createRestartButton);

    let endGameButton = document.createElement('button');
    endGameButton.classList.add('endGameButton');
    endGameButton.textContent = "End Game";
    endGameButton.addEventListener('click', function () {

        document.querySelector('header').append(endGameButton);
    })

    // how to end the game and return to start page


    // changeGameElements = function () {
    //     whichPlayerTurn(player);
    // }
    blankGameState = function () {
        player = 1;
        let allSelections = document.getElementsByTagName('LI');
        for (let i = 0; i < allSelections.length; i++) {
            allSelections[i].className = 'rows';
            allSelections[i].dataset.player = 0;
        }
        changeGameElements();
    }
}
let playerOneTag = document.querySelector('.firstPlayer');
let playerTwoTag = document.querySelector('.secondPlayer');
let player = 1;
function userSelection() {
    // console.log(player);
    let playGameColumns = document.querySelectorAll('ol');
    let dropArea = this.querySelectorAll('.rows');
    let changeBoard = dropArea[dropArea.length - 1];
    horizontalWinCondition = function () {
        for (let r = 6; r >= 0; r--)
            for (let c = 0; c < 4; c++) {
                // console.log(playGameColumns);
                if ((playGameColumns[c].childNodes[r].dataset.player) == player &&
                    (playGameColumns[c + 1].childNodes[r].dataset.player) == player &&
                    (playGameColumns[c + 2].childNodes[r].dataset.player) == player &&
                    (playGameColumns[c + 3].childNodes[r].dataset.player) == player) {
                    // alert(`${player} won`);
                    headerArea.textContent = `Player ${player} has WON!`;
                    return console.log(`${player} wins`);
                }
            }
    }
    verticalWinCondition = function () {
        for (let r = 6; r >= 3; r--)
            for (let c = 0; c < 7; c++) {
                if ((playGameColumns[c].childNodes[r].dataset.player) == player &&
                    (playGameColumns[c].childNodes[r - 1].dataset.player) == player &&
                    (playGameColumns[c].childNodes[r - 2].dataset.player) == player &&
                    (playGameColumns[c].childNodes[r - 3].dataset.player) == player) {
                    // alert(`${player} won`);
                    headerArea.textContent = `Player ${player} has WON!`;
                    return console.log(`${player} wins`);
                }
            }
    }
    diagonalUpRightWinCondition = function () {
        // diagonal up right
        for (let r = 6; r >= 3; r--)
            for (let c = 0; c < 4; c++) {
                if ((playGameColumns[c].childNodes[r].dataset.player) == player &&
                    (playGameColumns[c + 1].childNodes[r - 1].dataset.player) == player &&
                    (playGameColumns[c + 2].childNodes[r - 2].dataset.player) == player &&
                    (playGameColumns[c + 3].childNodes[r - 3].dataset.player) == player) {
                    // alert(`${player} won`);
                    headerArea.textContent = `Player ${player} has WON!`;
                    return console.log(`${player} wins`);

                }
            }
    }
    diagonalDownRightWinCondition = function () {
        // diagonal down right
        for (let r = 0; r <= 3; r++)
            for (let c = 0; c < 4; c++) {
                if ((playGameColumns[c].childNodes[r].dataset.player) == player &&
                    (playGameColumns[c + 1].childNodes[r + 1].dataset.player) == player &&
                    (playGameColumns[c + 2].childNodes[r + 2].dataset.player) == player &&
                    (playGameColumns[c + 3].childNodes[r + 3].dataset.player) == player) {
                    // alert(`${player} won`);
                    headerArea.textContent = `Player ${player} has WON!`;
                    return console.log(`${player} wins`);
                }
            }
    }
    winningGameConditions = function () {
        horizontalWinCondition();
        verticalWinCondition();
        diagonalUpRightWinCondition();
        diagonalDownRightWinCondition();

    }

    tieGameConditions = function () {
        if (gameTurns === 42) {
            headerArea.textContent = `The game is tied try again!`
            return console.log(`The game is tied`);
        }
    }


    if (dropArea.length === 1) {
        alert(`You can't play in this column!`);
    }
    else {
        if (player === 1) {
            changeBoard.classList.remove('rows');
            changeBoard.classList.add('playerOne');
            changeBoard.dataset.player = player;
            winningGameConditions();
            gameTurns += 1;
            console.log(gameTurns);
            tieGameConditions();
            player += 1;
            // whichPlayerTurn(player);

        }
        else if (player === 2) {
            changeBoard.classList.remove('rows');
            changeBoard.classList.add('playerTwo');
            changeBoard.dataset.player = player;
            winningGameConditions();
            gameTurns += 1;
            console.log(gameTurns);
            tieGameConditions();
            player -= 1;
            // whichPlayerTurn(player);
        }


    }
}




