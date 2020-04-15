import { Tetromino, tetrominoes, shapes } from "../data/tetrominoes";

export enum TetrominoRotation {
  Up,
  Right,
  Down,
  Left,
}

/**
 * return a random tetromino
 */
export function getRandomTetromino() {
  return tetrominoes[
    Math.floor(Math.random() * Math.floor(tetrominoes.length))
  ];
}

/**
 * get the shape of the given tetromino
 * @param tetromino a tetromino
 * @param rotation rotation step, default to 0 (0 to 3)
 */
export function getTetrominoShape(
  tetromino: Tetromino,
  rotation = TetrominoRotation.Up
) {
  return shapes[tetromino][rotation];
}
