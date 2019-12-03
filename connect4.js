// HOW DOES CONNECT 4 WORK
// 2 players take turns placing pieces on top of each other until a row/diagonal/column is formed of 4 of their pieces, can tie if board fills up, pieces stack on top of each other, 


// WINNING CONDITIONS
// 4 of the same player's chips in a row, column, or diagonal. How will we identify this? maybe match? regex looking for 4 if we can somehow keep values in a string.... 6X7 board  how do we keep track of moves and turns and values that chips occupy seperate?together? prob together to determine wins...

// Gameplay mechanics 
// each user picks a column to drop their chip in and it should fall to the bottom-most unoccupied slot in that column. players have a 6X7 board to work with and are trying to match 4 of their chips in a row, diagonal(any direction), or column to win, players can block each other and each goes once per rotating turns.

// START

//menu screen? what's taking you where? PVP, PVC, EZMODE, RULES(maybe just a link to connect4 rule site)

// GAMEPLAY
// PVP 
// two players rotate turns each move, I want player to drop their piece into using top of columns and the piece should fall to the bottom-most unoccupied spot. Can establish in grid prob and name each a class, 6X7 board. 2 buttons on top inner ish corners for restarting the game and actually leaving the game(return to menu). 2 identifiers for each player highlighting when its their turn and also text content telling who's turn it is. Functions... dynamically making these elements
// I want JS to add 6 * 7 columns each with their own classes...Classes by columns or rows... IDs? each is unique... setup basis of columns in HTML? let JS fill those columns...
//PLAY AREA

let playArea = document.querySelector('main');
// 7 columns of 6 rows..each column = ol/ul, each row item = li?
// lets try to make it an array through nodelists!
// make 7 columns and foreach column make 6 li's
// let createPlayColumn = document.createElement('ol');
// let createPlayRow = document.createElement('li');
// createPlayRow.textContent = 'does this work';
// let selectAllColumns = document.getElementsByTagName('ol');
// let selectAllRows = document.getElementsByTagName('li');
// column objects need to be a nodelist


// this function takes the userSelection and turns it a color
// now when a user clicks a column/rows in that column i want the last row to turn a color
let holdingNode = document.createElement('div');

function userSelection() {
    // let dropArea = this.lastElementChild;
    // dropArea.style.backgroundColor = 'grey';
    // can't remove child? maybe move it
    // dropArea.removeChild(dropArea);

    this.lastElementChild.style.backgroundColor = 'grey';
    holdingNode.insertBefore(this, null);
    // let selectedArea = Array.from(playGameRows);
    // let filledArea = selectedArea.pop();
    // console.log(filledArea);
    // console.log(selectedArea)
    // this.style.backgroundColor = 'grey';

}

// let selectedArea = Array.from(playGameRows);
// let selectedAreas = Array.from(playGameColumns);
// console.log(selectedArea);
// console.log(selectedAreas);


let createGameColumn = function () {
    // let playGameColumn = document.querySelectorAll('ol');
    for (let i = 0; i < 7; i++) {
        let createGameColumn = document.createElement('ol');
        createGameColumn.className = "columns";
        createGameColumn.addEventListener('click', userSelection);
        playArea.append(createGameColumn);
        // playGameColumn[i];
    }

    let playGameColumns = document.querySelectorAll('ol');
    playGameColumns.forEach(function () {
        for (let i = 0; i < playGameColumns.length; i++) {
            let createGameRow = document.createElement('li');
            // createGameRow.addEventListener('click', function (ext) {
            //     console.log("i was clicked");
            // })
            createGameRow.className = "rows";
            // createGameRow.addEventListener('click', userSelection, false);
            playGameColumns[i].append(createGameRow);
        }
    });
}
createGameColumn();
// how will I style each li based on columns/rows?
let playGameColumns = document.querySelectorAll('ol');
let playGameRows = document.querySelectorAll('li');
for (let i = 0; i < playGameRows.length; i++) {
    if (i % 2 === 0) {
        playGameRows[i].style.backgroundColor = 'blue';
    }
    else {
        playGameRows[i].style.backgroundColor = 'red';

    }
}
for (let i = 0; i < playGameColumns.length; i++) {
    if (i % 2 === 0) {

        playGameColumns[i].style.backgroundColor = 'purple';
    }
}


// playGameRows.addEventListener('click', function (evt) {
//     console.log("Iwas")

// this keyword w/ an event listener to directly identify each one
// playGameRows.addEventListener('click', function (evt) {
//     console.log("I clicked");
// });

// IF ELSE STATEMENTS MAYBE? to determine possible drop area and occupied spots maybe have a class....
// let createGameColumn = function () {
//     // let playGameColumn = document.querySelectorAll('ol');
//     for (let i = 0; i < 7; i++) {
//         let createGameColumn = document.createElement('ol');
//         createGameColumn.className = "columns";
//         playArea.append(createGameColumn);
//         // playGameColumn[i];
//     }

//     // let playGameColumn = document.querySelectorAll('ol');
//     // playGameColumn.forEach(function () {
//     //     for (let i = 0; i < 7; i++) {
//     //         let createGameRow = document.createElement('li');
//     //         playGameColumn[i].append(createGameRow);
//     //     }
//     // });
// }
// createGameColumn();
// let createGameRow = function () {

//     let playGameColumn = document.querySelectorAll('ol');
//     playGameColumn.forEach(function () {
//         for (let i = 0; i < 6; i++) {
//             let createGameRow = document.createElement('li');
//             playGameColumn.append(createGameRow);
//         }
//     })
// }
// createGameRow();