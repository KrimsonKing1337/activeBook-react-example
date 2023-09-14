import { useEffect, useState } from 'react';

import { konamiCodeHandler } from 'activeBook-core/utils/effects/achievements/konamiCodeHandler';
import { modalsWereShowed } from 'activeBook-core/utils/localStorage/modalsWereShowed';
import { changeBgColor, show } from 'activeBook-core/utils/effects/achievements/utils';
import { Flags as ModalsFlags } from 'activeBook-core/utils/localStorage/modalsWereShowed';

export function useKonamiCode() {
  useEffect(() => {
    const cb = () => {
      changeBgColor('regular');
      show('Retro gaming rules!');
    };

    const handler = konamiCodeHandler(cb);

    document.addEventListener('keydown', handler, false);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, []);
}

export function useModal() {
  const [modalIsActive, setModalIsActive] = useState(false);

  const modalOnClose = () => {
    setModalIsActive(false);

    modalsWereShowed.set(ModalsFlags.usingCamera, true);
  };

  return { modalIsActive, modalOnClose, setModalIsActive };
}
