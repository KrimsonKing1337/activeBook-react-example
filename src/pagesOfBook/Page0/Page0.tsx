import React, { useEffect, useState } from 'react';

import { store } from 'store';
import { Howl } from 'howler';

import { setPage } from 'store/main/actions';

import { PageWrapper } from 'components/PageWrapper';

import styles from './Page0.scss';

export const Page0 = () => {
  const [singleSound, setSingleSound] = useState<Howl>();

  // todo: промисифицировать onend(), должно быть singleSound.play().then(...)
  useEffect(() => {
    const singleSound = new Howl({
      src: ['assets/audios/single.mp3'],
      onend() {
        goToPage1();
      },
    });

    setSingleSound(singleSound);

    return () => singleSound.unload();
  }, []);

  function goToPage1() {
    store.dispatch(setPage(1));
  }

  function play() {
    if (!singleSound) {
      return;
    }

    singleSound.play();
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
