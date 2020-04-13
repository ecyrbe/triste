import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number) {
  const cb = useRef(callback);

  useEffect(() => {
    cb.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => cb.current();
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [cb, delay]);
}
