import React, { useMemo } from "react";
import { useTetris, getTetrominoShape, isInShape } from "../hooks/tetrominos";
import { useInterval } from "../hooks/interval";
import { useKeyBoard } from "../hooks/keyboard";
import { cn, range } from "../utils";

import style from "./board.module.css";

type BoardProps = {
  width: number;
  height: number;
};

function Square({ active }: { active: boolean }) {
  return (
    <div className={cn(style.square, active ? style.active : style.inactive)}>
      <div
        className={cn(
          style.internSquare,
          active ? style.active : style.inactive
        )}
      />
    </div>
  );
}

const Cell = React.memo(Square);

export function Board(props: BoardProps) {
  const {
    board,
    nextTetromino,
    isInCurrentShape,
    rotate,
    down,
    left,
    right,
    next,
  } = useTetris(props.width, props.height);

  const nextShape = useMemo(() => getTetrominoShape(nextTetromino), [
    nextTetromino,
  ]);

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
      }
      event.preventDefault();
    },
    ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"]
  );
  useInterval(down, 1000);

  return (
    <div className={cn(style.board)}>
      <div className={cn(style.lines)}>
        {board.map((line, l) => (
          <div key={l} className={cn(style.blockLine)}>
            {line.map((value, i) => (
              <Cell active={value > 0 || isInCurrentShape(i, l)} />
            ))}
          </div>
        ))}
      </div>
      <div className={cn(style.next)}>
        Next Block
        <div className={cn(style.lines)}>
          {range(1, 4).map((y) => (
            <div key={y} className={cn(style.blockLine)}>
              {range(1, 6).map((x) => (
                <Cell active={isInShape(nextShape, 2, 2, x, y)} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
