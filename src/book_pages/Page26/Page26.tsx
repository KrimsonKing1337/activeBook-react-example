import React, { useEffect } from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { Action } from 'components/Action';

import { useAudio } from 'hooks/effects/audio';
import { useVibration } from 'hooks/effects/vibration';

// todo: оживить модальное окно, которое вызывается по клику на "за ту сторону изгороди"
export const Page26 = () => {
  useAudio({
    src: '/assets/book_data/audios/sounds/cosmos-impacts.mp3',
    loop: true,
    playOnLoad: true,
  });

  const { vibrationOn } = useVibration();

  useEffect(() => {
    // todo: loop segments, как в прежней версии книги
    vibrationOn(300);
  }, []);

  return (
    <PageWrapper>
      <p>
        В космосе не было звуков, поэтому голова сама воображала их. Каждый удар глухим эхом отзывался в голове.
      </p>
      <p>
        Наконец, стало появляться нечто белое. Правда пока это фиксировалось исключительно приборами.
        Пробилась совсем крошечная часть корабля.
      </p>
      <p>
        Медленно, но верно, Егор пробивался <Action>за ту сторону изгороди.</Action>
      </p>
      <p>
        Было удивительно, что такой способ вообще работал.
      </p>
    </PageWrapper>
  );
};
