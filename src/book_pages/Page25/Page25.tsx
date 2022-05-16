import React from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useAudio } from 'hooks/effects/audio';

export const Page25 = () => {
  useAudio({
    src: '/assets/book_data/audios/sounds/coin-dropping.mp3',
    playOnLoad: true,
    oneShot: true,
  });

  return (
    <PageWrapper>
      <p>
        Отложив монетку, Егор взялся за штурвал. Раскачивая корабль взад-вперёд, он стал таранить невидимый барьер.
      </p>
      <p>
        Эффекта не было.
      </p>
      <p>
        Тогда он стал увеличивать амплитуду.
      </p>
    </PageWrapper>
  );
};
