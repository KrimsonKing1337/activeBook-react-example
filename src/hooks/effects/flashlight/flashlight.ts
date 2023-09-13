import { useSelector } from 'activeBook-core/store';
import { configSelectors } from 'activeBook-core/store/config';
import { flashlightInst } from 'activeBook-core/utils/effects/flashlight';
import { sleep } from 'activeBook-core/utils/sleep';

import { useSideShadow } from 'hooks/effects/side/shadow';

export function useFlashlight(withSideShadow = false, speed = 150) {
  const theme = useSelector(configSelectors.theme);

  const darkTheme = theme === 'dark';
  const color = darkTheme ? '#fff' : '#9addf4';

  const { sideShadowOn, sideShadowOff } = useSideShadow({
    color,
    isActiveDefault: false,
    speed,
  });

  const on = async (duration?: number) => {
    if (document.hidden) {
      return;
    }

    console.log('___ flashlight on');

    if (withSideShadow) {
      sideShadowOn();
    }

    flashlightInst.on();

    if (duration) {
      await sleep(duration);

      off();
      sideShadowOff();
    }
  };

  const off = () => {
    console.log('___ flashlight off');

    sideShadowOff();

    flashlightInst.off();
  };

  return { flashlightOff: off, flashlightOn: on };
}
