import { useState, useCallback } from "react";

const tetrominos = ["I", "J", "L", "O", "S", "T", "Z"] as const;

const shapes = {
  I: [
    [[1, 1, 1, 1]],
    [
      [0, 1],
      [0, 1],
      [0, 1],
      [0, 1],
    ],
    [[1, 1, 1, 1]],
    [
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 1],
    ],
  ],
  J: [
    [
      [2, 0, 0],
      [2, 2, 2],
    ],
    [
      [0, 2],
      [0, 2],
      [2, 2],
    ],
    [
      [2, 2, 2],
      [0, 0, 2],
    ],
    [
      [2, 2],
      [2, 0],
      [2, 0],
    ],
  ],
  L: [
    [
      [0, 0, 3],
      [3, 3, 3],
    ],
    [
      [3, 3],
      [0, 3],
      [0, 3],
    ],
    [
      [3, 3, 3],
      [3, 0, 0],
    ],
    [
      [3, 0],
      [3, 0],
      [3, 3],
    ],
  ],
  O: [
    [
      [4, 4],
      [4, 4],
    ],
  ],
  S: [
    [
      [0, 5, 5],
      [5, 5, 0],
    ],
    [
      [5, 0],
      [5, 5],
      [0, 5],
    ],
  ],
  T: [
    [
      [0, 6, 0],
      [6, 6, 6],
    ],
    [
      [0, 6],
      [6, 6],
      [0, 6],
    ],
    [
      [6, 6, 6],
      [0, 6, 0],
    ],
    [
      [0, 6, 0],
      [0, 6, 6],
      [0, 6, 0],
    ],
  ],
  Z: [
    [
      [7, 7, 0],
      [0, 7, 7],
    ],
    [
      [0, 7],
      [7, 7],
      [7, 0],
    ],
  ],
};

const positions = {
  I: { x: 3, y: -1 },
  J: { x: 4, y: -1 },
  L: { x: 4, y: -1 },
  O: { x: 4, y: -1 },
  S: { x: 4, y: -1 },
  T: { x: 4, y: -1 },
  Z: { x: 4, y: -1 },
};
export type Tetromino = typeof tetrominos[number];

function getInitBoard(width: number, height: number) {
  return new Array<Array<number>>(height)
    .fill(new Array<number>(width))
    .map((line) => line.fill(0));
}

function getRandomTetromino() {
  return tetrominos[Math.floor(Math.random() * Math.floor(tetrominos.length))];
}

/**
 * get the shape of the given tetromino
 * @param t a tetromino
 */
export function getTetrominoShape(t: Tetromino, rotation = 0) {
  return shapes[t][rotation];
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

function isShapeCollidingWithBoard(
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

function mergeBoard(prev: number[][], shape: number[][], x: number, y: number) {
  const lines = prev.length;
  const cur = prev
    .map((line, l) =>
      line.map((value, i) => value + isInShape(shape, x, y, i, l))
    )
    .filter((line) => line.some((value) => value === 0));
  cur.splice(0, 0, ...getInitBoard(prev[0].length, lines - cur.length));
  return cur;
}

/**
 * create a full tetris game state
 * @param width width of tetris
 * @param height height of tetris
 */
export const useTetris = (width = 10, height = 20) => {
  const [board, setBoard] = useState(() => getInitBoard(width, height));
  const [currentTetromino, setCurrent] = useState(getRandomTetromino);
  const [nextTetromino, setNext] = useState(getRandomTetromino);
  const [posX, setX] = useState(positions[currentTetromino].x);
  const [posY, setY] = useState(positions[currentTetromino].y);
  const [rotation, setRotation] = useState(0);

  const next = useCallback(() => {
    setRotation(0);
    setX(positions[nextTetromino].x);
    setY(positions[nextTetromino].y);
    setCurrent(nextTetromino);
    setNext(getRandomTetromino());
  }, [nextTetromino]);

  const rotate = useCallback(() => {
    setRotation((prev) => {
      const rotate = (prev + 1) % shapes[currentTetromino].length;
      const rotatedShape = shapes[currentTetromino][rotate];
      return isShapeCollidingWithBoard(board, rotatedShape, posX, posY)
        ? prev
        : rotate;
    });
  }, [board, currentTetromino, posX, posY]);
  const left = useCallback(
    () =>
      setX((prev) =>
        isShapeCollidingWithBoard(
          board,
          shapes[currentTetromino][rotation],
          prev - 1,
          posY
        )
          ? prev
          : prev - 1
      ),
    [board, currentTetromino, rotation, posY]
  );
  const right = useCallback(
    () =>
      setX((prev) =>
        isShapeCollidingWithBoard(
          board,
          shapes[currentTetromino][rotation],
          prev + 1,
          posY
        )
          ? prev
          : prev + 1
      ),
    [board, currentTetromino, rotation, posY]
  );
  const down = useCallback(
    () =>
      setY((prev) => {
        if (
          isShapeCollidingWithBoard(
            board,
            shapes[currentTetromino][rotation],
            posX,
            prev + 1
          )
        ) {
          setBoard((prevBoard) =>
            mergeBoard(
              prevBoard,
              shapes[currentTetromino][rotation],
              posX,
              prev
            )
          );
          next();
          return prev;
        } else return prev + 1;
      }),
    [board, currentTetromino, rotation, posX, next]
  );
  return {
    board,
    currentTetromino,
    nextTetromino,
    posX,
    posY,
    rotation,
    next,
    rotate,
    left,
    right,
    down,
  };
};
