import { useState } from 'react';

import { useFlashlight } from 'activeBook-core/hooks/effects/flashlight';
import { Toggle } from 'activeBook-core/components/Toggle';

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
