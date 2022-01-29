import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { mainSelectors } from 'store/main/reducer';

import { PageWrapper } from 'components/PageWrapper';

import { useAudio } from 'hooks/effects/audio';

import { goToPage } from 'utils/book/goToPage';
import { off as flashlightOff, on as flashlightOn } from 'utils/book/flashlight';
import { on as vibrationOn } from 'utils/book/vibration';

import styles from './Page0.scss';

export const Page0 = () => {
  const isVibrationAvailable = useSelector(mainSelectors.isVibrationAvailable);
  const isFlashlightAvailable = useSelector(mainSelectors.isFlashlightAvailable);

  const audioInst = useAudio({
    src: 'assets/book_data/audios/sounds/sword.mp3',
    fadeOutWhenUnload: false,
  });

  useEffect(() => {
    console.log('___ isVibrationAvailable', isVibrationAvailable);
  }, []);

  useEffect(() => {
    return () => {
      if (isFlashlightAvailable) {
        flashlightOff(); // todo: вынести проверку на isFlashlightAvailable в flashlightOn/off
      }
    };
  }, []);

  async function go() {
    if (!audioInst) {
      return;
    }

    if (isVibrationAvailable) {
      vibrationOn(1000); // todo: вынести проверку на isVibrationAvailable в vibrationOn/off
    }

    if (isFlashlightAvailable) {
      flashlightOn(); // todo: вынести проверку на isFlashlightAvailable в flashlightOn/off
    }

    await audioInst.play();

    goToPage(1);
  }

  function clickHandler() {
    go();
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
