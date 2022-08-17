import React from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useSound } from 'hooks/effects/audio/sound';
import { useVibration } from 'hooks/effects/vibration';

export const Page14 = () => {
  const { vibrationOn } = useVibration();

  useSound({
    src: '/assets/book_data/audios/sounds/shotgun-shot.mp3',
    playOnLoad: true,
    delay: 600,
    onPlay: () => {
      vibrationOn(250);
    },
  });

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
        Тем временем отец со странным выражением лица стал приближаться к Егору.
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
