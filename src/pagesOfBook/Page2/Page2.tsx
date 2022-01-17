import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { audioEffectsSelectors } from 'store/effects/audio/reducer';
import { setAudio } from 'store/effects/audio/actions';

import { PageWrapper } from 'components/PageWrapper';

import { HowlWrapper } from 'utils/book/HowlWrapper';

export const Page2 = () => {
  const dispatch = useDispatch();

  const audioInst = useSelector(audioEffectsSelectors.audioInst);

  // todo: добавить type = oneShot (ваншот - это обычно короткий звук, который должен прозвучать до конца)
  useEffect(() => {
    const carDoorCloseEngineStartSoundHowlInst = new HowlWrapper({
      src: ['assets/book_data/audios/sounds/car-door-close-engine-start.mp3'],
    });

    dispatch(setAudio(carDoorCloseEngineStartSoundHowlInst));
  }, []);

  useEffect(() => {
    if (!audioInst || audioInst.isUnloading) {
      return;
    }

    (async () => {
      await audioInst.play();
    })();

    return () => {
      audioInst.unload(true);
    };
  }, [audioInst]);

  return (
    <PageWrapper>
      <p>
        Сев в свой старенький седан, он повернул ключ зажигания и поехал в место Икс.
      </p>
      <p>
        Звуки радио заглушали учащённый от волнения стук сердца.
      </p>
      <p>
        Но мысли всё равно пробивались наружу:
      </p>
      <p>
        «Если столь быстрое перемещение сквозь пространство есть передача свойств объекта путём разрушения исходника..
      </p>
      <p>
        Значит ли это, что переместится мой точный клон, а сам я погибну?
      </p>
      <p>
        Ведь сознание формируется в мозгу.
      </p>
      <p>
        А мозг будет уничтожен в одном месте и воссоздан в другом.
      </p>
      <p>
        Это как скопировать файл в другое место и удалить оригинал.
      </p>
      <p>
        Да, для всех остальных оба файла будут идентичны.
      </p>
      <p>
        Кроме самого «файла»..»
      </p>
    </PageWrapper>
  );
};
