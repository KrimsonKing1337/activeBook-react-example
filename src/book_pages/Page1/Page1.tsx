import React, { useEffect } from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useSound } from 'hooks/effects/audio/sound';

import { play as playAchievement } from 'utils/effects/achievements/achievements';
import { Flags } from 'utils/localStorage/achievements';

export const Page1 = () => {
  useEffect(() => {
    playAchievement('Приключение начинается', Flags.firstMove);
  }, []);

  useSound({
    src: '/assets/book_data/audios/sounds/alarm-clock.mp3',
    playOnLoad: true,
    stopBy: 5000,
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
