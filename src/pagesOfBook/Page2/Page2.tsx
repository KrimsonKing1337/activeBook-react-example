import React, { useEffect } from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { HowlWrapper } from 'utils/book/HowlWrapper';

export const Page2 = () => {
  // todo: добавить type = oneShot (ваншот - это обычно короткий звук, который должен прозвучать до конца)
  useEffect(() => {
    const carDoorCloseEngineStartSoundHowlInst = new HowlWrapper({
      src: ['assets/book_data/audios/sounds/car-door-close-engine-start.mp3'],
    });

    (async () => {
      await carDoorCloseEngineStartSoundHowlInst.play();
    })();

    return () => carDoorCloseEngineStartSoundHowlInst.unload();
  }, []);

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
