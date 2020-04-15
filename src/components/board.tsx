import React, { useMemo } from "react";
import {
  useTetris,
  getTetrominoShape,
  isInShape,
  TetrisState,
} from "../hooks/tetrominos";
import { useKeyBoard } from "../hooks/keyboard";
import { cn, range } from "../utils";
import style from "./board.module.css";

type BoardProps = {
  width: number;
  height: number;
};

const TetrominoStyles = ["none", "I", "J", "L", "O", "S", "T", "Z"] as const;

function Square({ value }: { value: number }) {
  return (
    <div className={cn(style.square, style[TetrominoStyles[value]])}>
      <div className={cn(style.internSquare, style[TetrominoStyles[value]])} />
    </div>
  );
}

const Cell = React.memo(Square);

export function Board(props: BoardProps) {
  const {
    state,
    board,
    lines,
    level,
    score,
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
    [
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "Space",
      "Escape",
      "Enter",
    ]
  );

  return (
    <div className={cn(style.board)}>
      <div className={style.commands}>
        <div className={style.descriptions}>
          <div>&uarr;</div>
          <div>&larr;&darr;&rarr;</div>
          <div>escape</div>
          <div>enter</div>
          <div>space</div>
        </div>
        <div className={style.instructions}>
          <div> Rotate</div>
          <div> Move</div>
          <div> Play/Pause game</div>
          <div> Restart game</div>
          <div> Cheat</div>
        </div>
      </div>
      <div className={style.game}>
        {state === TetrisState.paused
          ? "Paused"
          : state === TetrisState.gameover
          ? "Game Over"
          : "Playing"}

        <div className={cn(style.lines)}>
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
        <div className={style.scores}>
          <div className={style.descriptions}>
            <div>Lines:</div>
            <div>Level:</div>
            <div>Score:</div>
          </div>
          <div className={style.values}>
            <div>{lines}</div>
            <div>{level}</div>
            <div>{score}</div>
          </div>
        </div>
        Next Block
        <div className={cn(style.lines)}>
          {range(1, 4).map((y) => (
            <div key={y} className={cn(style.blockLine)}>
              {range(1, 6).map((x) => {
                const color = isInShape(nextShape, 2, 2, x, y);
                return <Cell key={x} value={color} />;
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
