import { useState } from 'react';

import { Toggle } from 'components/Toggle';

import { useFlashlight } from 'hooks/effects/flashlight';

export const Flashlight = () => {
  const { flashlightOn, flashlightOff } = useFlashlight();

  const [buttonForFlashlightIsActive, setButtonForFlashlightIsActive] = useState(false);

  const buttonForFlashlightClickHandler = (value: boolean) => {
    if (!value) {
      flashlightOff();

      setButtonForFlashlightIsActive(false);
    } else {
      flashlightOn();

      setButtonForFlashlightIsActive(true);
    }
  };

  return (
    <Toggle
      label="Вспышка"
      isActiveDefault={false}
      isActive={buttonForFlashlightIsActive}
      onClickOn={() => buttonForFlashlightClickHandler(true)}
      onClickOff={() => buttonForFlashlightClickHandler(false)}
    />
  );
};
