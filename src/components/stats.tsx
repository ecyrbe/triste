import React from "react";
import style from "./board.module.css";
import { cn } from "../utils";

type StatsProps = {
  lines: number;
  level: number;
  score: number;
  highscore: number;
};
function StatsImpl({ lines, level, score, highscore }: StatsProps) {
  return (
    <>
      <div className={style.descriptions}>Stats</div>
      <div className={cn(style.scores, style.border)}>
        <div className={style.score}>
          <div>Lines:</div>
          <div>Level:</div>
          <div>Score:</div>
          <div>Highscore:</div>
        </div>
        <div className={style.values}>
          <div>{lines}</div>
          <div>{level}</div>
          <div>{score}</div>
          <div>{highscore}</div>
        </div>
      </div>
    </>
  );
}

export const Stats = React.memo(StatsImpl);
