import { useSelector } from 'react-redux';

import { mainSelectors } from 'store/main/reducer';

import { off, on } from 'utils/book/flashlight';

export function useFlashlight() {
  const isFlashlightAvailable = useSelector(mainSelectors.isFlashlightAvailable);

  const flashlightOn = () => {
    if (!isFlashlightAvailable) {
      return;
    }

    on();
  };

  const flashlightOff = () => {
    if (!isFlashlightAvailable) {
      return;
    }

    off();
  };

  return { flashlightOff, flashlightOn };
}
