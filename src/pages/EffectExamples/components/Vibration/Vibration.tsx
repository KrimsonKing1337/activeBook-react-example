import { useState } from 'react';

import { on as vibrationOn } from 'activeBook-core/utils/effects/vibration';

import { Toggle } from 'components/Toggle';

export const Vibration = () => {
  const [buttonForVibrationIsActive, setButtonForVibrationIsActive] = useState(false);

  const buttonForVibrationClickHandler = (value: boolean) => {
    if (!value) {
      navigator.vibrate(0);

      setButtonForVibrationIsActive(false);
    } else {
      const value = 1000;

      vibrationOn(value);

      setButtonForVibrationIsActive(true);

      setTimeout(() => {
        setButtonForVibrationIsActive(false);
      }, value);
    }
  };

  return (
    <Toggle
      label="Вибрация"
      isActiveDefault={false}
      isActive={buttonForVibrationIsActive}
      onClickOn={() => buttonForVibrationClickHandler(true)}
      onClickOff={() => buttonForVibrationClickHandler(false)}
    />
  );
};
