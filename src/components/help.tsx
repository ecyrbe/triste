import React from "react";
import style from "./board.module.css";

function HelpImpl() {
  return (
    <div className={style.help}>
      <div className={style.descriptions}>
        <div>&uarr;</div>
        <div>&larr;&darr;&rarr;</div>
        <div>escape</div>
        <div>enter</div>
      </div>
      <div className={style.instructions}>
        <div> Rotate</div>
        <div> Move</div>
        <div> Play/Pause game</div>
        <div> Restart game</div>
      </div>
    </div>
  );
}

export const Help = React.memo(HelpImpl);
