import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

import { useSound } from 'hooks/effects/audio/sound';


export const Page16 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/woman-scream-glass-crash-furniture.mp3',
    playOnLoad: true,
  });

  const Comment = (
    <WithModal text="Прикрытие рта ладонью," triggerType="author" mode="text">
      И нет, это не ошибка. Егор действительно очень любил своего отца, даже не смотря на то, что произошло
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        Крики матери, попытки спрятаться в доме от обезумевшего отца.
        Звон бьющегося стекла, судорожные попытки вызвать 911.
        {Comment} чтобы не было слышно дыхания.
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
