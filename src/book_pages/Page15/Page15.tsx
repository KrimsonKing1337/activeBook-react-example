import React from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useSound } from 'hooks/effects/audio/sound';

export const Page15 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/male-heavy-breathing.mp3',
    loop: true,
    playOnLoad: true,
    bg: true,
  });

  return (
    <PageWrapper>
      <p>
        Наконец, Егор проснулся. Тяжело дыша, он сел и стал приходить в себя.
      </p>
      <p>
        Да-а, отдых прошёл не лучшим образом.
      </p>
      <p>
        Этот сон давно преследовал его.
        Когда случается серьёзное потрясение в жизни — оно часто приходит потом во сне.
      </p>
      <p>
        И он прекрасно помнит, что было дальше.
      </p>
    </PageWrapper>
  );
};
