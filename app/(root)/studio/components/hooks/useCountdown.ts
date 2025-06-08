import { useState, useEffect } from 'react';

export const useCountdown = (initialSeconds: number) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setIsActive(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, isActive]);

  const start = () => {
    setSeconds(initialSeconds);
    setIsActive(true);
  };

  const reset = () => {
    setIsActive(false);
    setSeconds(initialSeconds);
  };

  return { seconds, isActive, start, reset };
};
