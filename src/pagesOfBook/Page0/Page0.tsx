import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { mainSelectors } from 'store/main/reducer';
import { setAudio } from 'store/effects/audio/actions';
import { audioEffectsSelectors } from 'store/effects/audio/reducer';

import { PageWrapper } from 'components/PageWrapper';

import { goToPage } from 'utils/book/goToPage';
import { HowlWrapper } from 'utils/book/HowlWrapper';
import { off as flashlightOff, on as flashlightOn } from 'utils/book/flashlight';
import { on as vibrationOn } from 'utils/book/vibration';

import styles from './Page0.scss';

export const Page0 = () => {
  const dispatch = useDispatch();

  const isVibrationAvailable = useSelector(mainSelectors.isVibrationAvailable);
  const isFlashlightAvailable = useSelector(mainSelectors.isFlashlightAvailable);
  const audioInst = useSelector(audioEffectsSelectors.audioInst);

  useEffect(() => {
    const swordSoundHowlInst = new HowlWrapper({
      src: ['assets/book_data/audios/sounds/sword.mp3'],
    });

    dispatch(setAudio(swordSoundHowlInst));

    return () => {
      if (isFlashlightAvailable) {
        flashlightOff(); // todo: вынести проверку на isFlashlightAvailable в flashlightOn/off
      }

      swordSoundHowlInst.unload();
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
