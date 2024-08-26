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

// Function to handle dragging
function makePiecesDraggable() {
    const pieces = document.querySelectorAll('.piece');
    
    pieces.forEach(piece => {
        piece.setAttribute('draggable', true);
        
        piece.addEventListener('dragstart', dragStart);
        piece.addEventListener('dragend', dragEnd);
    });

    const squares = document.querySelectorAll('.square');
    
    squares.forEach(square => {
        square.addEventListener('dragover', dragOver);
        square.addEventListener('drop', dropPiece);
    });
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.style.backgroundImage);
    e.target.classList.add('dragging');
}

function dragEnd(e) {
    e.target.classList.remove('dragging');
}

function dragOver(e) {
    e.preventDefault();  // Necessary to allow a drop
}

function dropPiece(e) {
    e.preventDefault();
    const draggedImage = e.dataTransfer.getData('text/plain');
    e.target.style.backgroundImage = draggedImage;
    const piece = document.querySelector('.dragging');
    piece.style.backgroundImage = '';
}

// Function to switch sides
function switchSides() {
    const boardElement = document.getElementById('gameboard');
    boardElement.innerHTML = '';  // Clear current board

    // Reverse the board array to switch sides
    initialBoard.reverse();
    
    // Generate the new board
    generateBoard();
    makePiecesDraggable();
}

// Generate the initial board and make pieces draggable when the page loads
window.onload = function() {
    generateBoard();
    makePiecesDraggable();
};