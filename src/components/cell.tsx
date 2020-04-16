import React from "react";
import style from "./cell.module.css";
import { cn } from "../utils";

const TetrominoStyles = ["none", "I", "J", "L", "O", "S", "T", "Z"] as const;

function Square({ value }: { value: number }) {
  return (
    <div className={cn(style.square, style[TetrominoStyles[value]])}>
      <div className={cn(style.internSquare, style[TetrominoStyles[value]])} />
    </div>
  );
}

export const Cell = React.memo(Square);
