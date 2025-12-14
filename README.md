# Conway's Game of Life

A JavaScript implementation of Conway's Game of Life using HTML5 Canvas.

## About

The Game of Life is a cellular automaton devised by mathematician John Conway in 1970. It's a zero-player game where the evolution is determined by the initial state, requiring no further input.

## Rules

1. Any live cell with fewer than 2 live neighbors dies (underpopulation)
2. Any live cell with 2 or 3 live neighbors survives
3. Any live cell with more than 3 live neighbors dies (overpopulation)
4. Any dead cell with exactly 3 live neighbors becomes alive (reproduction)

## Getting Started

Open `src/index.html` in a web browser.

## Configuration

Edit the constants in `src/main.js` to customize the simulation:

```javascript
const NUMBER_OF_CELLS_ROW = 100;  // Grid height
const NUMBER_OF_CELLS_COL = 100;  // Grid width
const CELL_SIZE = 50;             // Cell size in pixels
```

The initial grid is randomly populated with ~30% live cells.

## Project Structure

```
game-of-life/
├── src/
│   ├── index.html    # HTML entry point
│   ├── main.js       # Game logic and rendering
│   └── styles.css    # Styles
└── README.md
```
