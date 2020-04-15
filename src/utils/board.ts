/**
 * initialize an empty tetris board
 * @param width width of the board
 * @param height height of the board
 */
export function getInitBoard(width: number, height: number) {
  return new Array<Array<number>>(height)
    .fill(new Array<number>(width))
    .map((line) => line.fill(0));
}

/**
 * check if a given point from the board is in a given shape
 * @param shape the shape to check a position against
 * @param posX horizontal position of the shape in the board
 * @param posY vertical position of the shape in the board
 * @param x horizontal position in the board to check
 * @param y vertical position in the board to check
 */
export function isInShape(
  shape: number[][],
  posX: number,
  posY: number,
  x: number,
  y: number
) {
  return x >= posX &&
    x < posX + shape[0].length &&
    y >= posY &&
    y < posY + shape.length
    ? shape[y - posY][x - posX]
    : 0;
}

/**
 * Check if given shape is colliding with the board
 * @param board board to check collision against
 * @param shape shape of any tetromino
 * @param x horizontal position of the tetromino in the board
 * @param y vertical position of the tetromino in the board
 */
export function isShapeCollidingWithBoard(
  board: number[][],
  shape: number[][],
  x: number,
  y: number
) {
  return shape.some((line, j) =>
    line.some(
      (value, i) =>
        value > 0 &&
        y + j >= 0 &&
        (board[y + j] === undefined ||
          board[y + j][x + i] === undefined ||
          board[y + j][x + i] > 0)
    )
  );
}

/**
 * Merge a shape into a board (immutable)
 * @param board board to merge against
 * @param shape shape to merge
 * @param x horizontal position of the tetromino in the board
 * @param y vertical position of the tetromino in the board
 * @return a new board with merged tetromino
 */
export function merge(
  board: number[][],
  shape: number[][],
  x: number,
  y: number
) {
  return board.map((line, l) =>
    line.map((value, i) => value + isInShape(shape, x, y, i, l))
  );
}
/**
 * Clear all completed lines in the board (immutable)
 * @param board board to clean
 * @return a new board with the number of lines cleared
 */
export function clearLines(board: number[][]) {
  const lines = board.length;
  const clearedBoard = board.filter((line) =>
    line.some((value) => value === 0)
  );
  const cleared = lines - clearedBoard.length;
  if (cleared > 0) {
    clearedBoard.splice(
      0,
      0,
      ...getInitBoard(board[0].length, lines - clearedBoard.length)
    );
    return { board: clearedBoard, cleared };
  }
  return { board, cleared };
}
