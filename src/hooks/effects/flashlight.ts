import { useSelector } from 'react-redux';

import { mainSelectors } from 'store/main/selectors';

import { off as flashlightOff, on as flashlightOn } from 'utils/effects/flashlight';
import { sleep } from 'utils/sleep';

import { useSideShadow } from './sideShadow';

export function useFlashlight(withSideShadow = false) {
  const isFlashlightAvailable = useSelector(mainSelectors.isFlashlightAvailable);

  const { sideShadowOn, sideShadowOff } = useSideShadow({
    color: '#fff', // todo: применимо только для тёмной темы. у других тем другие значения
    isActiveDefault: false,
    speed: 150,
  });

  const on = async (duration?: number) => {
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
    sideShadowOff();

    if (isFlashlightAvailable) {
      flashlightOff();
    }
  };

  return { flashlightOff: off, flashlightOn: on };
}
