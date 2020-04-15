import { useState, useCallback, useEffect } from "react";
import { useInterval } from "../hooks/interval";

const tetrominos = ["I", "J", "L", "O", "S", "T", "Z"] as const;

/**
 * We are using modern SRS rotation system
 * @See https://tetris.fandom.com/wiki/SRS
 */
const shapes = {
  I: [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
    ],
    [
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 1],
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 1, 1, 1],
    ],
    [
      [0, 1],
      [0, 1],
      [0, 1],
      [0, 1],
    ],
  ],
  J: [
    [
      [2, 0, 0],
      [2, 2, 2],
    ],
    [
      [0, 2, 2],
      [0, 2, 0],
      [0, 2, 0],
    ],
    [
      [0, 0, 0],
      [2, 2, 2],
      [0, 0, 2],
    ],
    [
      [0, 2],
      [0, 2],
      [2, 2],
    ],
  ],
  L: [
    [
      [0, 0, 3],
      [3, 3, 3],
    ],
    [
      [0, 3, 0],
      [0, 3, 0],
      [0, 3, 3],
    ],
    [
      [0, 0, 0],
      [3, 3, 3],
      [3, 0, 0],
    ],
    [
      [3, 3],
      [0, 3],
      [0, 3],
    ],
  ],
  O: [
    [
      [0, 4, 4],
      [0, 4, 4],
    ],
  ],
  S: [
    [
      [0, 5, 5],
      [5, 5, 0],
    ],
    [
      [0, 5, 0],
      [0, 5, 5],
      [0, 0, 5],
    ],
    [
      [0, 0, 0],
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
      [0, 6, 0],
      [0, 6, 6],
      [0, 6, 0],
    ],
    [
      [0, 0, 0],
      [6, 6, 6],
      [0, 6, 0],
    ],
    [
      [0, 6],
      [6, 6],
      [0, 6],
    ],
  ],
  Z: [
    [
      [7, 7, 0],
      [0, 7, 7],
    ],
    [
      [0, 0, 7],
      [0, 7, 7],
      [0, 7, 0],
    ],
    [
      [0, 0, 0],
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
  O: { x: 3, y: -1 },
  S: { x: 4, y: -1 },
  T: { x: 4, y: -1 },
  Z: { x: 4, y: -1 },
};
export type Tetromino = typeof tetrominos[number];

export enum TetrisState {
  running,
  paused,
  gameover,
}

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

function merge(board: number[][], shape: number[][], x: number, y: number) {
  const lines = board.length;
  const cur = board
    .map((line, l) =>
      line.map((value, i) => value + isInShape(shape, x, y, i, l))
    )
    .filter((line) => line.some((value) => value === 0));
  cur.splice(0, 0, ...getInitBoard(board[0].length, lines - cur.length));
  return cur;
}

/**
 * create a full tetris game state
 * @param width width of tetris
 * @param height height of tetris
 */
export const useTetris = (width = 10, height = 20) => {
  const [state, setState] = useState(TetrisState.paused);
  const [board, setBoard] = useState(() => getInitBoard(width, height));
  const [currentTetromino, setCurrent] = useState(getRandomTetromino);
  const [nextTetromino, setNext] = useState(getRandomTetromino);
  const [posX, setX] = useState(positions[currentTetromino].x);
  const [posY, setY] = useState(positions[currentTetromino].y);
  const [rotation, setRotation] = useState(0);
  const [checkY, setCheckY] = useState(-1);

  const togglePause = () =>
    setState((prev) =>
      prev === TetrisState.gameover
        ? prev
        : prev === TetrisState.paused
        ? TetrisState.running
        : TetrisState.paused
    );
  const reset = useCallback(() => {
    setNext((prev) => {
      setRotation(0);
      setX(positions[prev].x);
      setY(positions[prev].y);
      setCurrent(prev);
      return getRandomTetromino();
    });
    setBoard(getInitBoard(width, height));
    setState(TetrisState.running);
  }, [width, height]);

  const next = useCallback(() => {
    if (state === TetrisState.running)
      setNext((prev) => {
        setRotation(0);
        setX(positions[prev].x);
        setY(positions[prev].y);
        setCurrent(prev);
        return getRandomTetromino();
      });
  }, [state]);

  const rotate = useCallback(() => {
    if (state === TetrisState.running)
      setRotation((prev) => {
        const rotate = (prev + 1) % shapes[currentTetromino].length;
        const rotatedShape = shapes[currentTetromino][rotate];
        return isShapeCollidingWithBoard(board, rotatedShape, posX, posY)
          ? prev
          : rotate;
      });
  }, [state, board, currentTetromino, posX, posY]);
  const left = useCallback(() => {
    if (state === TetrisState.running)
      setX((prev) =>
        isShapeCollidingWithBoard(
          board,
          shapes[currentTetromino][rotation],
          prev - 1,
          posY
        )
          ? prev
          : prev - 1
      );
  }, [state, board, currentTetromino, rotation, posY]);
  const right = useCallback(() => {
    if (state === TetrisState.running)
      setX((prev) =>
        isShapeCollidingWithBoard(
          board,
          shapes[currentTetromino][rotation],
          prev + 1,
          posY
        )
          ? prev
          : prev + 1
      );
  }, [state, board, currentTetromino, rotation, posY]);
  const down = useCallback(() => {
    if (state === TetrisState.running) {
      setCheckY(posY + 1);
    }
  }, [state, posY]);

  useEffect(() => {
    if (checkY === posY + 1) {
      if (
        isShapeCollidingWithBoard(
          board,
          shapes[currentTetromino][rotation],
          posX,
          checkY
        )
      ) {
        const saveboard = merge(
          board,
          shapes[currentTetromino][rotation],
          posX,
          posY
        );
        if (saveboard[0].some((value) => value > 0))
          setState(TetrisState.gameover);
        else {
          setBoard(saveboard);
          next();
        }
      } else setY(checkY);
    }
  }, [board, currentTetromino, rotation, posX, posY, checkY, next]);

  useInterval(() => {
    if (state === TetrisState.running) down();
  }, 1000);

  return {
    state,
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
    togglePause,
    reset,
  };
};
