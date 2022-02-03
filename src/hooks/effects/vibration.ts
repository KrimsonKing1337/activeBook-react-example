import { useSelector } from 'react-redux';

import { mainSelectors } from 'store/main/reducer';

import { off, on } from 'utils/effects/vibration';

export function useVibration() {
  const isVibrationAvailable = useSelector(mainSelectors.isVibrationAvailable);

  const vibrationOn = (n: number) => {
    if (!isVibrationAvailable) {
      return;
    }

    on(n);
  };

  const vibrationOff = () => {
    if (!isVibrationAvailable) {
      return;
    }

    off();
  };

  return { vibrationOff, vibrationOn };
}
