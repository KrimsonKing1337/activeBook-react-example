import { useEffect } from 'react';

import { useVibration } from 'hooks/effects/vibration';

export function useLoopedVibration() {
  const { vibrationOn } = useVibration();

  useEffect(() => {
    vibrationOn(300);

    const interval = setInterval(() => {
      vibrationOn(300);
    }, 1093);

    return () => {
      clearInterval(interval);
    };
  }, []);
}
