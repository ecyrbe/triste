import { useState, useCallback } from "react";

/**
 * original gameboy drop rates
 * @see https://tetris.fandom.com/wiki/Tetris_(Game_Boy)
 */
const rates = [
  Math.floor((1000 * 53) / 60), //level 8
  Math.floor((1000 * 49) / 60), //level 1
  Math.floor((1000 * 45) / 60), //level 2
  Math.floor((1000 * 41) / 60), //level 3
  Math.floor((1000 * 37) / 60), //level 4
  Math.floor((1000 * 33) / 60), //level 5
  Math.floor((1000 * 28) / 60), //level 6
  Math.floor((1000 * 22) / 60), //level 7
  Math.floor((1000 * 17) / 60), //level 8
  Math.floor((1000 * 11) / 60), //level 9
  Math.floor((1000 * 10) / 60), //level 10
  Math.floor((1000 * 9) / 60), //level 11
  Math.floor((1000 * 8) / 60), //level 12
  Math.floor((1000 * 7) / 60), //level 13
  Math.floor((1000 * 6) / 60), //level 14
  Math.floor((1000 * 6) / 60), //level 15
  Math.floor((1000 * 5) / 60), //level 16
  Math.floor((1000 * 5) / 60), //level 17
  Math.floor((1000 * 4) / 60), //level 18
  Math.floor((1000 * 4) / 60), //level 19
  Math.floor((1000 * 3) / 60), //level 20
  Math.floor((1000 * 2) / 60), //level 21
  Math.floor((1000 * 1) / 60), //level 22
];
const points = [0, 40, 100, 300, 1200];

export function useScore() {
  const [lines, setLines] = useState(0);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [rate, setRate] = useState(rates[0]);

  const updateScore = useCallback(
    (n: number) => {
      const nlines = lines + n;
      const nlevel = Math.floor(nlines / 10);
      const nrate = rates[nlevel];
      setLines(nlines);
      setLevel(nlevel);
      setRate(nrate);
      setScore((prev) => prev + (nlevel + 1) * points[n]);
    },
    [lines]
  );

  const resetScore = useCallback(() => {
    setLines(0);
    setLevel(0);
    setRate(rates[0]);
    setScore(0);
  }, []);

  return { lines, score, level, rate, updateScore, resetScore };
}
