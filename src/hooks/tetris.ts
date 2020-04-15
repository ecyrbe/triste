import { useState, useCallback, useEffect } from "react";
import { useInterval } from "./interval";
import { useScore } from "./score";
import { positions } from "../data/tetrominoes";
import {
  getRandomTetromino,
  getTetrominoShape,
  clearLines,
  merge,
  getInitBoard,
  isShapeCollidingWithBoard,
} from "../utils";
import { TetrominoRotation } from "../utils/tetrominoes";

export enum TetrisState {
  running,
  paused,
  gameover,
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
  const [rotation, setRotation] = useState(TetrominoRotation.Up);
  const [checkY, setCheckY] = useState(-1);
  const { lines, level, score, rate, updateScore, resetScore } = useScore();

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
    resetScore();
    setBoard(getInitBoard(width, height));
    setState(TetrisState.running);
  }, [width, height, resetScore]);

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
        const rotate: TetrominoRotation = (prev + 1) % 4;
        const rotatedShape = getTetrominoShape(currentTetromino, rotate);
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
          getTetrominoShape(currentTetromino, rotation),
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
          getTetrominoShape(currentTetromino, rotation),
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
          getTetrominoShape(currentTetromino, rotation),
          posX,
          checkY
        )
      ) {
        const { board: saveboard, cleared } = clearLines(
          merge(
            board,
            getTetrominoShape(currentTetromino, rotation),
            posX,
            posY
          )
        );
        if (saveboard[0].some((value) => value > 0))
          setState(TetrisState.gameover);
        else {
          setBoard(saveboard);
          if (cleared) updateScore(cleared);
          next();
        }
      } else setY(checkY);
    }
  }, [
    board,
    currentTetromino,
    rotation,
    posX,
    posY,
    checkY,
    next,
    updateScore,
  ]);

  useInterval(() => {
    if (state === TetrisState.running) down();
  }, rate);

  return {
    lines,
    level,
    score,
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
