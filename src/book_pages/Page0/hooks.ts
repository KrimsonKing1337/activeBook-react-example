import { useEffect, useState } from 'react';

import { play as achievementPlay } from 'utils/effects/achievement';
import { konamiCodeHandler } from 'utils/effects/konamiCodeHandler';
import { modalsWereShowed } from 'utils/localStorage/modalsWereShowed';

export function useKonamiCode() {
  useEffect(() => {
    const cb = () => achievementPlay('Retro gaming rules!', 'konami');

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

    const modalFlag = modalsWereShowed.Flags.usingCamera;
    modalsWereShowed.set(modalFlag, true);
  };

  return { modalIsActive, modalOnClose, setModalIsActive };
}
