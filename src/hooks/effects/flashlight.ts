import { useSelector } from 'react-redux';

import { mainSelectors } from 'store/main/selectors';

import { off, on } from 'utils/effects/flashlight';
import { sleep } from 'utils/sleep';

import { useSideShadow } from './sideShadow';

export function useFlashlight(withSideShadow = false) {
  const isFlashlightAvailable = useSelector(mainSelectors.isFlashlightAvailable);

  const { sideShadowOn, sideShadowOff } = useSideShadow({
    color: '#fff', // todo: применимо только для тёмной темы. у других тем другие значения
    isActiveDefault: false,
    speed: 150,
  });

  const flashlightOn = async (duration?: number) => {
    if (withSideShadow) {
      sideShadowOn();
    }

    if (isFlashlightAvailable) {
      on();
    }

    if (duration) {
      await sleep(duration);

      flashlightOff();
      sideShadowOff();
    }
  };

  const flashlightOff = () => {
    sideShadowOff();

    if (isFlashlightAvailable) {
      off();
    }
  };

  return { flashlightOff, flashlightOn };
}
