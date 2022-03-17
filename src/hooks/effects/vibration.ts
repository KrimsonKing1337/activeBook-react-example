import { useSelector } from 'react-redux';

import { mainSelectors } from 'store/main/selectors';

import { off as vibrationOff, on as vibrationOn } from 'utils/effects/vibration';

export function useVibration() {
  const isVibrationAvailable = useSelector(mainSelectors.isVibrationAvailable);

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
