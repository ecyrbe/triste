import { useState, useCallback } from "react";
import { orderBy } from "lodash";

export type Highscore = {
  score: number;
  date: string;
};

const HIGHSCORES_KEY = "highscores";

/**
 * hook to manage player highscores with localStorage integration
 * @param maxStore maximum number of highscores to register
 */
export function useHighscores(maxStore = 5) {
  const [highscores, setHighscores] = useState(() => {
    try {
      const scores = localStorage.getItem(HIGHSCORES_KEY);
      if (scores) return JSON.parse(scores) as Highscore[];
    } catch {}
    return new Array(maxStore).fill({ score: 0, date: "--" });
  });
  const addHighscore = useCallback(
    (score: number) => {
      setHighscores((prev) => {
        let scores = orderBy(
          [...prev, { score, date: new Date().toLocaleDateString() }],
          ["score"],
          ["desc"]
        ).slice(0, maxStore);
        localStorage.setItem(HIGHSCORES_KEY, JSON.stringify(scores));
        return scores;
      });
    },
    [maxStore]
  );
  return { highscores, addHighscore };
}
