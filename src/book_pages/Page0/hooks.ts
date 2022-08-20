import { useEffect, useState } from 'react';

import { konamiCodeHandler } from 'utils/effects/achievements/konamiCodeHandler';
import { modalsWereShowed } from 'utils/localStorage/modalsWereShowed';
import { changeBgColor, show } from 'utils/effects/achievements/utils';
import { Flags as ModalsFlags } from 'utils/localStorage/modalsWereShowed';

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
