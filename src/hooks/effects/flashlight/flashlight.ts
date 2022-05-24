import { useSelector } from 'react-redux';

import { mainSelectors } from 'store/main';

import { useSideShadow } from 'hooks/effects/sideShadow';

import { off as flashlightOff, on as flashlightOn } from 'utils/effects/flashlight';
import { sleep } from 'utils/sleep';

export function useFlashlight(withSideShadow = false) {
  const isFlashlightAvailable = useSelector(mainSelectors.isFlashlightAvailable);

  const { sideShadowOn, sideShadowOff } = useSideShadow({
    color: '#fff', // todo: применимо только для тёмной темы. у других тем другие значения
    isActiveDefault: false,
    speed: 150,
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
