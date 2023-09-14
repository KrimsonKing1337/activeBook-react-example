import { useEffect } from 'react';

import { play as playAchievement } from 'activeBook-core/utils/effects/achievements';
import { Flags } from 'activeBook-core/utils/effects/achievements/utils';
import { useSound } from 'activeBook-core/hooks/effects/audio/sound';
import { PageWrapper } from 'activeBook-core/components/PageWrapper';
import { WithModal } from 'activeBook-core/components/ColoredTextTrigger/WithModal';

export const Page1 = () => {
  useEffect(() => {
    playAchievement({
      id: Flags.firstMove,
      text: 'Приключение начинается',
    });
  }, []);

  useSound({
    src: '/assets/book_data/audios/sounds/alarm-clock.mp3',
    playOnLoad: true,
    stopBy: 5000,
  });

  const Comment1 = (
    <WithModal text="утренний туалет" triggerType="author" mode="text">
      Многие удивлялись, когда узнали, что это оборот речи такой. И он не подразумевает что герой сидел на толчке
    </WithModal>
  );

  const Comment2 = (
    <WithModal text="телевизор" triggerType="author" mode="text">
      В какой-то из предыдущих версий в этом месте включалось видео в модальном окне,
      где был отрезок из передачи «Контрольная закупка», выпуск про икру
    </WithModal>
  );

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
        Совершив {Comment1}, он стал готовить себе завтрак и включил {Comment2}. Не то,
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
