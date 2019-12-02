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
// two players rotate turns each move, I want player to drop their piece into using top of columns and the piece should fall to the bottom-most unoccupied spot. Can establish in grid prob and name each a class, 6X7 board. 2 buttons on top inner ish corners for restarting the game and actually leaving the game(return to menu). 2 identifiers for each player highlighting when its their turn and also text content telling who's turn it is. 

// IF ELSE STATEMENTS MAYBE? to determine possible drop area and occupied spots maybe have a class....