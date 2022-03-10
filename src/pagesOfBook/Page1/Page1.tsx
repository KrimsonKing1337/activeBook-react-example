import React, { useEffect } from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useAudio } from 'hooks/effects/audio';
import { useMusic } from 'hooks/effects/music';

import { play as playAchievement } from 'utils/effects/achievement';

export const Page1 = () => {
  useEffect(() => {
    playAchievement('Первая страница');
  }, []);

  useAudio({
    src: '/assets/book_data/audios/sounds/alarm-clock.mp3',
    playOnLoad: true,
    stopBy: 5000,
  });

  useMusic({
    src: '/assets/book_data/audios/music/Sergey_Eybog_-_A_Promise_From_Distant_Days.mp3',
    range: {
      from: 1,
      to: 3,
    },
  });

  return (
    <PageWrapper>
      <h1>
        Глава 1.
      </h1>
      <h2>
        Важный день.
      </h2>

      <p>
        Звенел будильник.
        Но он уже не спал, поэтому довольно быстро нажал на кнопку выключения.
      </p>
      <p>
        Впрочем, правильнее сказать — вообще не спал. Сегодня очень важный день. Для него и для
        всего человечества.
      </p>
      <p>
        Глубоко вздохнув и потерев глаза, он встал с кровати и проследовал в ванную.
      </p>
      <p>
        Совершив утренний туалет, он стал готовить себе завтрак и включил телевизор. Не то,
        что бы он особо хотел его смотреть, но полнейшая тишина давила на уши сильнее.
      </p>
      <p>
        В это время года по утрам уже светло, что безусловно его радовало. А ведь после развода его
        мало что радовало.
      </p>
      <p>
        Покончив с завтраком, он выключил телевизор, оделся и стал спускаться к машине.
      </p>
    </PageWrapper>
  );
};
