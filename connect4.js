let mainContent = document.querySelector('body');
let playArea = document.querySelector('main');
let headerArea = document.querySelector('header');
let intro = document.createElement('div');
intro.textContent = "CONNECT 4 DOTS THE GAME";
mainContent.append(intro);
let startGameButton = document.createElement('button');
startGameButton.textContent = "Start Game";
playArea.append(startGameButton);
startGameButton.addEventListener('click', function () {
    createGameColumn();
    createGameElements();
})


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
                    return console.log(`${player} wins`);
                }
            }
    }
    winningGameConditions = function () {
        horizontalWinCondition();
        verticalWinCondition();
        diagonalUpRightWinCondition();
        diagonalDownRightWinCondition();
        // veritcalWinCondition();
        // horizontal win condition
        // I DID NOT KNOW YOU COULD DO THIS!
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
            player += 1;
        }
        else if (player === 2) {
            changeBoard.classList.remove('rows');
            changeBoard.classList.add('playerTwo');
            changeBoard.dataset.player = player;
            winningGameConditions();
            player -= 1;
        }

        // return console.log(`${player} wins`);
        // winningGameHorizontals = function () {
        //     for (let i = 0; i < 6; i++) {
        //         console.log(playGameColumns);
        //         if ((playGameColumns[i].childNodes[6 - i].dataset.player) === player &&
        //             (playGameColumns[i + 1].childNodes[6 - i].dataset.player) === player &&
        //             (playGameColumns[i + 2].childNodes[6 - i].dataset.player) === player &&
        //             (playGameColumns[i + 3].childNodes[6 - i].dataset.player) === player) {
        //             return console.log(`${player} wins`);
        //         }
        //         else {
        //             changeGameElements();
        //         }
        //     }
    }
}
// winningGameHorizontals();
// changeGameElements();




// targets child node containing our player dataset attribute





// console.log(playGameColumns[0].childNodes[6].dataset.player);
// console.log(playGameColumns[0].childNodes[5].dataset.player);
// this is the virtual game board

// for (let entry of dropArea.values()) {
// console.log(entry);
//     console.log(dropArea[2][1]);
//     // if ()

// for (let i = 6; i < 7; i++) {
// if (dropArea[i].dataset.player === "1") {
// console.log("win");
// }
// }
// }
let createGameColumn = function () {
    for (let i = 0; i < 7; i++) {
        let gameColumn = document.createElement('ol');
        // gameColumn.className = `columns${i}`;
        gameColumn.className = "columns";
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
let createPlayerTurn = document.createElement('h2');
let createGameElements = function () {
    let createPlayerOne = document.createElement('h1');
    createPlayerOne.classList.add('playerOneIndicator');
    createPlayerOne.textContent = "Player 1";
    headerArea.append(createPlayerOne);
    whichPlayerTurn(player);
    headerArea.append(createPlayerTurn);
    let createPlayerTwo = document.createElement('h1');
    createPlayerTwo.classList.add('playerTwoIndicator');
    createPlayerTwo.textContent = "Player 2";
    headerArea.append(createPlayerTwo);
    let createRestartButton = document.createElement('button');
    createRestartButton.classList.add('restartGameButton');
    createRestartButton.textContent = "Restart Game";
    createRestartButton.addEventListener('click', function () {
        blankGameState();
    })
    document.querySelector('nav').append(createRestartButton);
    let endGameButton = document.createElement('button');
    endGameButton.classList.add('endGameButton');
    endGameButton.textContent = "End Game";
    endGameButton.addEventListener('click', function () {
    })
    document.querySelector('nav').append(endGameButton);
}
let changeGameElements = function () {
    whichPlayerTurn(player);
}
let blankGameState = function () {
    player = 1;
    let allSelections = document.getElementsByTagName('LI');
    for (let i = 0; i < allSelections.length; i++) {
        allSelections[i].className = 'rows';
    }
    changeGameElements();
}
function whichPlayerTurn(player) {
    if (player === 1) {
        createPlayerTurn.textContent = "Player 1's Turn";
        createPlayerTurn.classList.add('playerOneIndicator');
        createPlayerTurn.classList.remove('playerTwoIndicator');
    }
    else {
        createPlayerTurn.textContent = "Player 2's Turn";
        createPlayerTurn.classList.add('playerTwoIndicator');
        createPlayerTurn.classList.remove('playerOneIndicator');
    }
}
