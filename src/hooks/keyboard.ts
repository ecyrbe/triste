import { useEffect, useRef } from "react";

export function useKeyBoard(
  callback: (event: KeyboardEvent) => void,
  codes: string[],
  options: {
    keyup?: boolean;
    keydown?: boolean;
  } = { keydown: true, keyup: false }
) {
  const cb = useRef(callback);

  useEffect(() => {
    cb.current = callback;
  }, [callback]);

  useEffect(() => {
    const downHandler = (event: KeyboardEvent) => {
      if (codes.includes(event.code)) {
        cb.current(event);
      }
    };
    const upHandler = (event: KeyboardEvent) => {
      if (codes.includes(event.code)) {
        cb.current(event);
      }
    };
    if (options.keydown) window.addEventListener("keydown", downHandler);
    if (options.keyup) window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [cb, codes, options.keyup, options.keydown]);
}
