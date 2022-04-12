import { useEffect } from 'react';

import { useFlashlight } from 'hooks/effects/flashlight';
import { useInverseColor } from 'hooks/effects/inverseColor';

export function useWelcomeOutside() {
  const { flashlightOn, flashlightOff } = useFlashlight();
  const { inverseColorOn, inverseColorOff } = useInverseColor();

  useEffect(() => {
    flashlightOn();
    inverseColorOn();

    return () => {
      flashlightOff();
      inverseColorOff();
    };
  }, []);
}
