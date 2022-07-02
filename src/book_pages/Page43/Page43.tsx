import React from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useMusic } from 'hooks/effects/audio/music';

export const Page43 = () => {
  useMusic({
    src: 'assets/book_data/audios/music/Scott-Pilgrim-opening.mp3',
  });

  return (
    <PageWrapper>
      <p>
        Вдруг он услышал какие-то до боли знакомые звуки.
      </p>
      <p>
        Узнав в них начало своего любимого фильма, он поспешил на зов.
      </p>
      <p>
        И в глубине одного из зданий, он отыскал мини-кинотеатр. В котором был лишь один ряд и одно место. Оно было
        подписано «Егор».
      </p>
      <p>
        Рядом стоял стол с его любимым солёным попкорном и вкусной газировкой.
      </p>
      <p>
        Секунду Егор сомневался, но потом, пожав плечами, устроился поудобнее и стал в тысячный раз смотреть любимый
        фильм.
      </p>
      <p>
        Александр ещё ни разу не промахнулся с тем, как сделать гостю хорошо.
      </p>
    </PageWrapper>
  );
};
