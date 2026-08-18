Tic Tac Toe 
This is a simple Tic Tac Toe game made using HTML, CSS, and JavaScript. I built it while practicing DOM manipulation, event listeners, CSS styling, and basic JavaScript game logic.

The game has two players: X and O. Players take turns clicking the boxes, and the game checks automatically if someone wins or if the game ends in a draw.

Technologies Used to create:
HTML – Creates the structure of the game
CSS – Handles the design and layout
JavaScript – Handles the game logic and user interactions

HTML Structure
The HTML file creates the main structure of the game.

Some important parts are:
A main .tictactoe-container that holds the game.
Login and Register links at the top.(which is optional just to demonstrate some link reference)
An <h1> for the Tic Tac Toe heading.
A paragraph showing whose turn it is using the id="Xturn".
A .gaming-board container that holds the 9 buttons/cells of the game.(Each game box uses the .cell class)
A #gamereset button is used to play the game again.


CSS Design

The CSS is mainly used to make the game look clean and organize the board.

Some important CSS concepts I used:
display: flex
linear-gradient()

CSS Grid
The actual Tic Tac Toe board uses CSS Grid.

display: grid;
grid-template-columns: repeat(3, 100px);
grid-template-rows: repeat(3, 100px);



<MAIN>
JavaScript

JavaScript is responsible for making the game actually work.

Selecting HTML Elements
I used DOM methods such as:

document.querySelectorAll('.cell');
document.getElementById('Xturn');
document.getElementById('gamereset');

Winning condition 
const winConditions = [ 
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6] 
];

Game Board Array

The board is stored in an array containing 9 empty positions:

let board = Array(9).fill('');

Each position represents one cell on the Tic Tac Toe board.

addEventListener(): Each cell gets a click event listener:

cell.addEventListener('click', () => handleCellClick(cell, index));

So whenever a player clicks a cell, JavaScript runs the game logic for that cell.

handleCellClick(): This function mainly handles a player's move.

It:
Checks whether the cell is already occupied.
Places the current player's X or O.
Updates the board array.

This function checks the winning combinations to see whether the current player has three matching marks in a row.

highlightWin(): When a player wins, this function finds the winning combination and adds the:

winning-cell: class to those cells so they can be highlighted using CSS.

resetGame(): The reset button calls resetGame().



Mini Project (Week 2 Project task completed)
Tic Tac Toe Game

Develop a fully functional Tic Tac Toe Game using:
HTML
CSS
JavaScript 

Project Requirements:
Responsive user interface
Two-player gameplay
Winner detection
Draw detection
Restart/New Game functionality
Clean and readable code structure
Proper folder organization