const cells = document.querySelectorAll('.cell');
const turnDisplay = document.getElementById('Xturn');
const resetBtn = document.getElementById('gamereset');

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

let currentPlayer = 'X';
let board = Array(9).fill('');
let gameActive = true;

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleCellClick(cell, index));
});

resetBtn.addEventListener('click', resetGame);

function handleCellClick(cell, index) {
    if (board[index] !== '' || !gameActive) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer === 'X' ? 'x-mark' : 'o-mark');

    if (checkWin()) {
        turnDisplay.textContent = `Player ${currentPlayer} Wins! 🎉`;
        gameActive = false;
        highlightWin();
        return;
    } 
    if (board.every(cell => cell !== '')) {
        turnDisplay.textContent = "It's a Draw!";
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    turnDisplay.textContent = `Player ${currentPlayer}'s Turn`;
}

function checkWin() {
    return winConditions.some(condition => {
        const [a, b, c] = condition;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}
function highlightWin() {
    const winCombo = winConditions.find(condition => {
        const [a, b, c] = condition;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
    if (winCombo) {
        winCombo.forEach(index => cells[index].classList.add('winning-cell'));
    }
}
function resetGame() {
    board = Array(9).fill('');
    currentPlayer = 'X';
    gameActive = true;
    turnDisplay.textContent = 'First Player Turn';
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x-mark', 'o-mark', 'winning-cell');
    });
}