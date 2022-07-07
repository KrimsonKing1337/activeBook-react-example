import { useEffect, useState } from 'react';

import { play as achievementPlay } from 'utils/effects/achievements';
import { konamiCodeHandler } from 'utils/effects/achievements/konamiCodeHandler';
import { modalsWereShowed } from 'utils/localStorage/modalsWereShowed';
import { Flags as AchievementsFlags } from 'utils/localStorage/achievements';
import { Flags as ModalsFlags } from 'utils/localStorage/modalsWereShowed';

export function useKonamiCode() {
  useEffect(() => {
    const cb = () => achievementPlay({
      id: AchievementsFlags.konami,
      text: 'Retro gaming rules!',
      type: 'gold',
    });

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
