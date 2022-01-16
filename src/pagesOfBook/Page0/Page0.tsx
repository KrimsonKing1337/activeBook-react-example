import React, { useEffect, useState } from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { goToPage } from 'utils/book/goToPage';
import { HowlWrapper } from 'utils/book/HowlWrapper';
import { off as flashlightOff, on as flashlightOn } from 'utils/book/flashlight';
import { on as vibrationOn } from 'utils/book/vibration';

import styles from './Page0.scss';

export const Page0 = () => {
  const [welcomeSound, setWelcomeSound] = useState<HowlWrapper>();

  useEffect(() => {
    const swordSoundHowlInst = new HowlWrapper({
      src: ['assets/book_data/audios/sounds/sword.mp3'],
    });

    setWelcomeSound(swordSoundHowlInst);

    return () => {
      flashlightOff();
      swordSoundHowlInst.unload();
    };
  }, []);

  async function play() {
    if (!welcomeSound) {
      return;
    }

    vibrationOn(1000);
    flashlightOn();
    await welcomeSound.play();

    goToPage(1);
  }

  // todo: flashlight, vibration
  function clickHandler() {
    play();
  }

  return (
    <PageWrapper
      withoutToolbar
      title={'Заглянуть за..'}
      subtitle={'Предисловие: все описываемые персонажи события вымышлены, совпадения с реальными — чистая случайность.'}>
      <p className={styles.startReading} onClick={clickHandler}>
        Начать читать
      </p>
      <p />
      <p />
      <p>
        P.S.: случайно и неслучайно забредшим, напоминание:
      </p>
      <p>
        это <b>не финальная</b> версия рассказа.
      </p>
      <p>
        Некоторые части повествования и/или эффектов могут меняться.
      </p>
      <p>
        Спасибо за понимание.
      </p>
    </PageWrapper>
  );
};
