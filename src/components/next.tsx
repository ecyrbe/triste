import React from "react";
import { Cell } from "./cell";
import style from "./board.module.css";
import { cn, range } from "../utils";

type NextProps = {
  computeColor: (x: number, y: number) => number;
};

function NextImpl({ computeColor }: NextProps) {
  return (
    <>
      <div className={style.descriptions}>Next</div>
      <div className={cn(style.lines, style.border)}>
        {range(1, 4).map((y) => (
          <div key={y} className={cn(style.blockLine)}>
            {range(1, 6).map((x) => {
              return <Cell key={x} value={computeColor(x, y)} />;
            })}
          </div>
        ))}
      </div>
    </>
  );
}

export const Next = React.memo(NextImpl);
