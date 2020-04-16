import React from "react";
import style from "./board.module.css";
import { cn } from "../utils";
import { Highscore } from "../hooks/highscores";

type HighscoresProps = {
  highscores: Highscore[];
};

function HighscoresImpl({ highscores }: HighscoresProps) {
  return (
    <>
      <div className={style.descriptions}> Highscores</div>
      <div className={cn(style.highscores, style.border)}>
        {highscores.map((highscore, i) => {
          return (
            <div className={style.highscore} key={`SC-${i}-${highscore.score}`}>
              <div>{i + 1}</div>
              <div className={style.normal}>{highscore.score} </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export const Highscores = React.memo(HighscoresImpl);
