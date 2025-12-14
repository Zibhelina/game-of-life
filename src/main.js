const NUMBER_OF_ITERATIONS = 1000;
const NUMBER_OF_CELLS_ROW = 1000;
const NUMBER_OF_CELLS_COL = 1000;
const CELL_SIZE = 2;
const GRID_WIDTH = NUMBER_OF_CELLS_COL * CELL_SIZE;
const GRID_HEIGHT = NUMBER_OF_CELLS_ROW * CELL_SIZE;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let grid;

main();

function main() {
  setup();
  setInterval(update, 100);
}

function setup() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, GRID_WIDTH, GRID_HEIGHT);

  grid = Array.from({ length: NUMBER_OF_CELLS_ROW }, () =>
    Array.from({ length: NUMBER_OF_CELLS_COL }, () =>
      Math.random() < 0.3 ? 1 : 0,
    ),
  );
  refreshGrid();
}

function update() {
  let next_grid_state = Array.from({ length: NUMBER_OF_CELLS_ROW }, () =>
    Array(NUMBER_OF_CELLS_COL).fill(0),
  );
  for (let row = 0; row < NUMBER_OF_CELLS_ROW; row++) {
    for (let col = 0; col < NUMBER_OF_CELLS_COL; col++) {
      const neighboringLivingCells = countNeighboringLivingCells(row, col);
      if (grid[row][col] == 0 && neighboringLivingCells == 3) {
        next_grid_state[row][col] = 1;
      } else if (
        grid[row][col] == 1 &&
        (neighboringLivingCells == 2 || neighboringLivingCells == 3)
      ) {
        next_grid_state[row][col] = 1;
      } else {
        next_grid_state[row][col] = 0;
      }
    }
  }
  grid = next_grid_state;
  refreshGrid();
}

function countNeighboringLivingCells(row, col) {
  let countLiveCells = 0;
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue;
      if (isWithinBounds(row + dr, col + dc) && grid[row + dr][col + dc] == 1) {
        countLiveCells++;
      }
    }
  }
  return countLiveCells;
}

function isWithinBounds(row, col) {
  if (
    row >= 0 &&
    row < NUMBER_OF_CELLS_ROW &&
    col >= 0 &&
    col < NUMBER_OF_CELLS_COL
  ) {
    return true;
  }
  return false;
}

function refreshGrid() {
  for (let i = 0; i < NUMBER_OF_CELLS_ROW; i++) {
    for (let j = 0; j < NUMBER_OF_CELLS_COL; j++) {
      if (grid[i][j] == 1) {
        ctx.fillStyle = "white";
        ctx.fillRect(j * CELL_SIZE, i * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      } else {
        ctx.fillStyle = "black";
        ctx.fillRect(j * CELL_SIZE, i * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
    }
  }
}
