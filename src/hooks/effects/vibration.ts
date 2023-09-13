import { useEffect } from 'react';

import { useSelector } from 'activeBook-core/store';
import { mainSelectors } from 'activeBook-core/store/main';
import { off as vibrationOff, on as vibrationOn } from 'activeBook-core/utils/effects/vibration';

export function useVibration() {
  const isVibrationAvailable = useSelector(mainSelectors.isVibrationAvailable);

  useEffect(() => {
    return () => {
      off();
    };
  }, []);

  const on = (n: number) => {
    if (!isVibrationAvailable) {
      return;
    }

    if (document.hidden) {
      return;
    }

    vibrationOn(n);

    console.log(`___ vibrated: ${n}`);
  };

  const off = () => {
    if (!isVibrationAvailable) {
      return;
    }

    vibrationOff();
  };

  return { vibrationOff: off, vibrationOn: on };
}
