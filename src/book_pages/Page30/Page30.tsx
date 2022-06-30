import React from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useMusic } from 'hooks/effects/audio/music';

export const Page30 = () => {
  useMusic({
    src: '/assets/book_data/audios/music/Promise_From_Distant_Days.mp3',
    loop: true,
  });

  return (
    <PageWrapper>
      <p>
        Снилось что-то необыкновенно уютное и тёплое. Лето, зелень и лёгкий ветерок.
      </p>
      <p>
        Уносящий вдаль старый автобус.
      </p>
      <p>
        И какая-то странная девочка. Которая спросила «ты пойдёшь со мной?»
      </p>
    </PageWrapper>
  );
};
