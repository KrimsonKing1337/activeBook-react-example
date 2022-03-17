import React from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useAudio } from 'hooks/effects/audio';


export const Page15 = () => {
  useAudio({
    src: '/assets/book_data/audios/sounds/woman-scream-glass-crash-furniture.mp3',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <p>
        Крики матери, попытки спрятаться в доме от обезумевшего отца.
        Звон бьющегося стекла, судорожные попытки вызвать 911.
        Прикрытие рта ладонью, чтобы не было слышно дыхания.
      </p>
      <p>
        Технологии ушли далеко вперёд, но без собственного желания что-либо сделать с собой — ничего не получится.
        Поэтому алкоголизм так и не изжил себя. А если есть ещё и психические расстройства — то вообще пиши-пропало.
      </p>
      <p>
        Оставалось лишь затаиться на чердаке.
      </p>
    </PageWrapper>
  );
};
