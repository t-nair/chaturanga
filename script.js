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

let draggedPiece = null;

function dragStart(e) {
    draggedPiece = e.target;
    setTimeout(() => e.target.classList.add('invisible'), 0);
}

function dragEnd(e) {
    e.target.classList.remove('invisible');
    draggedPiece = null;
}

function dragOver(e) {
    e.preventDefault();  // Necessary to allow a drop
}

function dropPiece(e) {
    e.preventDefault();
    
    // Ensure the target is a valid drop target (an empty square or a square with another piece)
    if (e.target.classList.contains('square')) {
        // Move the piece to the new square
        e.target.appendChild(draggedPiece);
    } else if (e.target.classList.contains('piece')) {
        // If dropping on a square that already has a piece, replace it
        e.target.parentNode.appendChild(draggedPiece);
    }
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