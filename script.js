// Define piece positions for initial setup
const initialBoard = [
    ['C2', 'H2', 'E2', 'M2', 'R2', 'E2', 'H2', 'C2'],
    ['I2', 'I2', 'I2', 'I2', 'I2', 'I2', 'I2', 'I2'],
    ['_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', '_', '_', '_', '_', '_', '_'],
    ['i1', 'i1', 'i1', 'i1', 'i1', 'i1', 'i1', 'i1'],
    ['c1', 'h1', 'e1', 'r1', 'm1', 'e1', 'h1', 'c1']
];

// Function to generate the game board
function generateBoard() {
    const boardElement = document.getElementById('gameboard');

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');

            if (initialBoard[row][col] !== '_') {
                const piece = document.createElement('div');
                piece.classList.add('piece');
                piece.style.backgroundImage = `url('images/${initialBoard[row][col].toLowerCase()}.svg')`;
                square.appendChild(piece);
            }

            boardElement.appendChild(square);
        }
    }
}


// Generate the initial board when the page loads
window.onload = generateBoard;
