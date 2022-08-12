import { useSelector } from 'react-redux';

import { mainSelectors } from 'store/main';
import { configSelectors } from 'store/config';

import { useSideShadow } from 'hooks/effects/side/shadow';

import { off as flashlightOff, on as flashlightOn } from 'utils/effects/flashlight';
import { sleep } from 'utils/sleep';

export function useFlashlight(withSideShadow = false, speed = 150) {
  const isFlashlightAvailable = useSelector(mainSelectors.isFlashlightAvailable);
  const theme = useSelector(configSelectors.theme);

  const darkTheme = theme === 'dark';
  const color = darkTheme ? '#fff' : '#9addf4';

  const { sideShadowOn, sideShadowOff } = useSideShadow({
    color,
    isActiveDefault: false,
    speed,
  });

  const on = async (duration?: number) => {
    console.log('___ flashlight on');

    if (withSideShadow) {
      sideShadowOn();
    }

    if (isFlashlightAvailable) {
      flashlightOn();
    }

    if (duration) {
      await sleep(duration);

      off();
      sideShadowOff();
    }
  };

  const off = () => {
    console.log('___ flashlight off');

    sideShadowOff();

    if (isFlashlightAvailable) {
      flashlightOff();
    }
  };

  return { flashlightOff: off, flashlightOn: on };
}
