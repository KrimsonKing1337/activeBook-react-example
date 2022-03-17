import React from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useAudio } from 'hooks/effects/audio';

export const Page24 = () => {
  useAudio({
    src: '/assets/book_data/audios/sounds/coin-flipping.mp3',
    playOnLoad: true,
    loop: true,
  });

  return (
    <PageWrapper>
      <p>
        Космонавт стал подбрасывать монетку — это всегда помогало ему думать.
      </p>
      <p>
        Плюс — хорошее средство разбавить гнетущую тишину.
      </p>
      <p>
        В голову ничего не приходило, кроме банального тарана. Ну а что?
        Любую стену можно пробить, нужно лишь достаточно сильно ударить.
      </p>
    </PageWrapper>
  );
};
