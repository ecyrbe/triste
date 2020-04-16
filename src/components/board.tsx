import React, { useMemo, useCallback } from "react";
import { Cell } from "./cell";
import { useTetris, TetrisState } from "../hooks/tetris";
import { useKeyBoard } from "../hooks/keyboard";
import { cn, getTetrominoShape, isInShape } from "../utils";
import style from "./board.module.css";
import { Stats } from "./stats";
import { Next } from "./next";
import { Help } from "./help";
import { Highscores } from "./highscores";

type BoardProps = {
  width: number;
  height: number;
};

export function Board(props: BoardProps) {
  const {
    state,
    board,
    lines,
    level,
    score,
    highscores,
    currentTetromino,
    nextTetromino,
    posX,
    posY,
    rotation,
    rotate,
    down,
    left,
    right,
    next,
    togglePause,
    reset,
  } = useTetris(props.width, props.height);

  const nextShape = useMemo(() => getTetrominoShape(nextTetromino), [
    nextTetromino,
  ]);
  const currentShape = useMemo(
    () => getTetrominoShape(currentTetromino, rotation),
    [currentTetromino, rotation]
  );

  const computeNextColor = useCallback(
    (x: number, y: number) => isInShape(nextShape, 2, 2, x, y),
    [nextShape]
  );

  useKeyBoard(
    (event) => {
      switch (event.code) {
        case "ArrowUp":
          rotate();
          break;
        case "ArrowDown":
          down();
          break;
        case "ArrowLeft":
          left();
          break;
        case "ArrowRight":
          right();
          break;
        case "Space":
          next();
          break;
        case "Escape":
          togglePause();
          break;
        case "Enter":
          reset();
          break;
      }
      event.preventDefault();
    },
    ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Escape", "Enter"]
  );

  return (
    <div className={cn(style.board)}>
      <Help />
      <div
        className={cn(
          style.game,
          state === TetrisState.paused
            ? style.paused
            : state === TetrisState.gameover
            ? style.over
            : style.running
        )}
      >
        {state === TetrisState.paused
          ? "Paused"
          : state === TetrisState.gameover
          ? "Game Over"
          : "Playing"}

        <div className={cn(style.lines, style.border)}>
          {board.map((line, l) => (
            <div key={l} className={cn(style.blockLine)}>
              {line.map((value, i) => {
                const color =
                  state === TetrisState.gameover
                    ? 1
                    : value || isInShape(currentShape, posX, posY, i, l);
                return <Cell value={color} key={`Cell-${i}${l}${color}`} />;
              })}
            </div>
          ))}
        </div>
      </div>
      <div className={cn(style.next)}>
        <Next computeColor={computeNextColor} />
        <Stats lines={lines} level={level} score={score} />
        <Highscores highscores={highscores} />
      </div>
    </div>
  );
}
