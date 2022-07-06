import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

import { useMusic } from 'hooks/effects/audio/music';

export const Page41 = () => {
  useMusic({
    src: 'assets/book_data/audios/music/heaven-music.mp3',
    loop: true,
  });

  const EasterEgg = (
    <WithModal text="звук в этом месте " triggerType="egg" eggId="page-41">
      <img src="/assets/book_data/images/sound-like-heaven-vk.png" alt="" />
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        Не успел наш герой ничего ответить, как очутился перед огромными золотыми вратами. Он стоял будто на огромном
        розоватом облаке. Короче, всё напоминало тот Рай, который принято представлять в обществе. Даже {EasterEgg}
        исходил какой-то такой.
      </p>
      <p>
        Создатель пояснил, что он хотел создать наиболее понятный и предсказуемый образ для Егора. Он поступает так со
        всеми, кто покидает наш мир, чтобы сделать путешествие наиболее мягким.
      </p>
    </PageWrapper>
  );
};
