function toggleCell(x, y) {
  // Toggle the clicked cell
  let cell = document.getElementById(`cell-${x}-${y}`);
  cell.classList.toggle('is-off');
}

function toggleNeighbors(x, y) {
  // Toggle the neighbors of the clicked cell
  let neighbors = [
    { x: x-1, y: y },
    { x: x+1, y: y },
    { x: x, y: y-1 },
    { x: x, y: y+1 }
  ];

  neighbors.forEach(function(neighbor) {
    if (neighbor.x >= 0 && neighbor.x < 5 && neighbor.y >= 0 && neighbor.y < 5) {
      let neighborCell = document.getElementById(`cell-${neighbor.x}-${neighbor.y}`);
      neighborCell.classList.toggle('is-off');
    }
  });
}

function checkWinCondition() {
  // Check if all cells are 'off'
  let cells = document.querySelectorAll('.cell');
  let isWin = Array.from(cells).every(cell => cell.classList.contains('is-off'));
  if (isWin) {
    window.alert('You win!');
  }
}

function toggleCellAndNeighbors(x, y) {
  toggleCell(x, y);
  toggleNeighbors(x, y);
  checkWinCondition();
}

function initializeBoard() {
  const board = document.getElementById('gameBoard');
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const cell = document.createElement('div');
      cell.id = `cell-${i}-${j}`;
      cell.classList.add('cell');
      cell.addEventListener('click', function() {
        toggleCellAndNeighbors(i, j);
      });
      board.appendChild(cell);
    }
  }

  // Simulate random clicks to create a solvable puzzle
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (Math.random() < 0.5) {
        toggleCellAndNeighbors(i, j);
      }
    }
  }
}

initializeBoard();
