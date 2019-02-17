import React, { useState, useEffect, useRef } from "react";

export function useInterval(callback: any, delay?: number) {
  const savedCallback = useRef(callback);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export interface UseDynamicRgbOptions {
  interval?: number;
  disabled?: boolean;
}

export function useDynamicRgb(
  color: number[],
  options: UseDynamicRgbOptions = { interval: 1000, disabled: false }
) {
  const [dynamicColors, setDynamicColors] = useState(color);
  const [rGoingUp, setRGoingUp] = useState(true);
  const [gGoingUp, setGGoingUp] = useState(true);
  const [aGoingUp, setAGoingUp] = useState(true);
  useInterval(() => {
    let [r, g, a] = [...dynamicColors];
    if (r < 255 && rGoingUp) {
      r++;
    } else if (r > 0 && !rGoingUp) {
      r--;
    } else if (r === 255) {
      setRGoingUp(false);
      r--;
    } else if (r === 0) {
      setRGoingUp(true);
      r++;
    }

    if (g < 255 && gGoingUp) {
      g++;
    } else if (g > 0 && !gGoingUp) {
      g--;
    } else if (g === 255) {
      setGGoingUp(false);
      g--;
    } else if (g === 0) {
      setGGoingUp(true);
      g++;
    }

    if (a < 255 && aGoingUp) {
      a++;
    } else if (a > 0 && !aGoingUp) {
      a--;
    } else if (a === 255) {
      setAGoingUp(false);
      a--;
    } else if (a === 0) {
      setAGoingUp(true);
      r++;
    }

    if (!options.disabled) {
      setDynamicColors([r, g, a]);
    }
    
  }, options.interval);

  return dynamicColors;
}
