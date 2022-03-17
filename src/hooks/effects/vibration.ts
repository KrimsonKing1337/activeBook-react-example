import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { mainSelectors } from 'store/main/selectors';

import { off as vibrationOff, on as vibrationOn } from 'utils/effects/vibration';

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

    vibrationOn(n);
  };

  const off = () => {
    if (!isVibrationAvailable) {
      return;
    }

    vibrationOff();
  };

  return { vibrationOff: off, vibrationOn: on };
}
