import React, { useEffect, useState } from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { goToPage } from 'utils/book/goToPage';
import { HowlWrapper } from 'utils/book/HowlWrapper';

import styles from './Page0.scss';

export const Page0 = () => {
  const [singleSound, setSingleSound] = useState<HowlWrapper>();

  useEffect(() => {
    const singleSound = new HowlWrapper({
      src: ['assets/audios/single.mp3'],
    });

    setSingleSound(singleSound);

    return () => singleSound.unload();
  }, []);

  async function play() {
    if (!singleSound) {
      return;
    }

    await singleSound.play();

    goToPage(1);
  }

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
