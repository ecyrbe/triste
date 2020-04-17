import { useEffect, useRef } from "react";

/**
 * hook for setInterval
 * @param callback callback to be called when delay is expired
 * @param delay dynamic (can change at runtime) delay in ms
 */
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
