import React, { useEffect } from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useAudio } from 'hooks/effects/audio';
import { useVibration } from 'hooks/effects/vibration';

import { sleep } from 'utils/sleep';

export const Page13 = () => {
  const audioInst = useAudio({
    src: '/assets/book_data/audios/sounds/shotgun-shot.mp3',
    oneShot: true,
  });

  const { vibrationOn } = useVibration();

  useEffect(() => {
    if (!audioInst) {
      return;
    }

    (async () => {
      await sleep(600);

      audioInst?.play();

      await sleep(97);

      vibrationOn(250);
    })();
  }, [audioInst]);

  return (
    <PageWrapper>
      <p>
        Послышался выстрел.
      </p>
      <p>
        Прямое попадание. Но крови не было.
      </p>
      <p>
        Но и пошевелиться Егор не мог. Его парализовало.
      </p>
      <p>
        Тем временем отец со странным выражением на лице стал приближаться к Егору.
      </p>
      <p>
        Ближе, ещё ближе..
      </p>
      <p>
        Вот он уже протягивает руку..
      </p>
    </PageWrapper>
  );
};
