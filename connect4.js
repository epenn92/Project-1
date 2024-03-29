let headerArea = document.querySelector('header');
let mainContent = document.querySelector('body');
let playArea = document.querySelector('main');
let playerIndicator = document.querySelector('.playerIndicator');
let playerOneText = document.querySelector('.playerOneText');
let playerTwoText = document.querySelector('.playerTwoText');
let insertChipAudio = new Audio('/Pictures/insertChip.wav');
let winningPlayerAudio = new Audio('/Pictures/winningPlayer.wav');
let playerTieAudio = new Audio('/Pictures/playerTie.wav');
let gameTurns = 0;

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

    });

    let learningMode = document.createElement('button');
    learningMode.classList.add('landingPage');
    learningMode.textContent = "Learning Mode";
    playArea.append(learningMode);
    playArea.addEventListener('click', function () {
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
    $('.connect4DotsGameSelect').hide();
    $('.playerFunctions').show();
}

landingPageStart();

gameModal = function () {
    let myGameModal = document.createElement('div');
    playArea.append(myGameModal);
    myGameModal.classList.add('gameModalBackGround');
    let myGameModalContent = document.createElement('div');
    myGameModalContent.classList.add('gameModalContent');
    myGameModal.append(myGameModalContent);
    if (gameTurns === 42) {
        myGameModalContent.textContent = `Game is a tie! No one wins!`
    }
    else {
        myGameModalContent.textContent = `Congratulations player ${player} you win!`
    }
    let closeButton = document.createElement('span');
    myGameModalContent.append(closeButton);
    closeButton.classList.add('closeModal');
    closeButton.textContent = "Rematch?";
    myGameModal.style.display = "block";
    closeButton.addEventListener('click', function () {
        myGameModal.style.display = "none";
        blankGameState();
    });
}

createGameColumn = function () {
    for (let i = 0; i < 7; i++) {
        let gameColumn = document.createElement('ol');
        gameColumn.className = `columns${i}`;

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

createGameElements = function () {
    headerArea.textContent = "May the best player win";
    playerOneText.textContent = "P1";
    playerTwoText.textContent = "P2";
    playerOneText.classList.add('playerIndicator');
    let createRestartButton = document.createElement('button');
    createRestartButton.classList.add('restartGameButton');
    createRestartButton.textContent = "Restart Game";
    createRestartButton.addEventListener('click', function () {
        blankGameState();
    })
    document.querySelector('main').append(createRestartButton);
    let gameModal = document.createElement('div');
    gameModal.classList.add('gameModal');

    removeGameState = function () {

        playArea.remove();

        $('.playerfunctions').hide();
        $('.landingPage').show();
        $('.connect4DotsGameSelect').show();

    }

    blankGameState = function () {
        player = 1;
        gameTurns = 0;
        headerArea.textContent = "May the best player win";
        let allSelections = document.getElementsByTagName('LI');
        for (let i = 0; i < allSelections.length; i++) {
            allSelections[i].className = 'rows';
            allSelections[i].dataset.player = 0;
            playerTwoText.classList.remove('playerIndicator');
            playerOneText.classList.add('playerIndicator');
        }

    }

}


let playerOneTag = document.querySelector('.firstPlayer');
let playerTwoTag = document.querySelector('.secondPlayer');
let player = 1;
function userSelection() {

    let playGameColumns = document.querySelectorAll('ol');
    let dropArea = this.querySelectorAll('.rows');
    let changeBoard = dropArea[dropArea.length - 1];
    insertChipAudio.play();
    horizontalWinCondition = function () {
        for (let r = 6; r >= 0; r--)
            for (let c = 0; c < 4; c++) {

                if ((playGameColumns[c].childNodes[r].dataset.player) == player &&
                    (playGameColumns[c + 1].childNodes[r].dataset.player) == player &&
                    (playGameColumns[c + 2].childNodes[r].dataset.player) == player &&
                    (playGameColumns[c + 3].childNodes[r].dataset.player) == player) {

                    headerArea.textContent = `Player ${player} has WON!`;
                    winningPlayerAudio.play();
                    gameModal();
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

                    headerArea.textContent = `Player ${player} has WON!`;
                    winningPlayerAudio.play();
                    gameModal();
                }
            }
    }
    diagonalUpRightWinCondition = function () {

        for (let r = 6; r >= 3; r--)
            for (let c = 0; c < 4; c++) {
                if ((playGameColumns[c].childNodes[r].dataset.player) == player &&
                    (playGameColumns[c + 1].childNodes[r - 1].dataset.player) == player &&
                    (playGameColumns[c + 2].childNodes[r - 2].dataset.player) == player &&
                    (playGameColumns[c + 3].childNodes[r - 3].dataset.player) == player) {

                    headerArea.textContent = `Player ${player} has WON!`;
                    winningPlayerAudio.play();
                    gameModal();

                }
            }
    }
    diagonalDownRightWinCondition = function () {

        for (let r = 0; r <= 3; r++)
            for (let c = 0; c < 4; c++) {
                if ((playGameColumns[c].childNodes[r].dataset.player) == player &&
                    (playGameColumns[c + 1].childNodes[r + 1].dataset.player) == player &&
                    (playGameColumns[c + 2].childNodes[r + 2].dataset.player) == player &&
                    (playGameColumns[c + 3].childNodes[r + 3].dataset.player) == player) {

                    headerArea.textContent = `Player ${player} has WON!`;
                    winningPlayerAudio.play();
                    gameModal();
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
            playerTieAudio.play();
            gameModal();
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

            tieGameConditions();
            playerOneText.classList.remove('playerIndicator');
            playerTwoText.classList.add('playerIndicator');
            player += 1;


        }
        else if (player === 2) {
            changeBoard.classList.remove('rows');
            changeBoard.classList.add('playerTwo');
            changeBoard.dataset.player = player;
            winningGameConditions();
            gameTurns += 1;

            tieGameConditions();
            playerTwoText.classList.remove('playerIndicator');
            playerOneText.classList.add('playerIndicator');
            player -= 1;

        }


    }
}




