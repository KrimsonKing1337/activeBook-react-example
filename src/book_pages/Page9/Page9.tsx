import React, { useEffect } from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

import { useSound } from 'hooks/effects/audio/sound';
import { useVibration } from 'hooks/effects/vibration';

export const Page9 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/Gagarin-and-rocket-start.mp3',
    playOnLoad: true,
  });

  const { vibrationOn } = useVibration();

  useEffect(() => {
    const timer = setTimeout(() => {
      vibrationOn(53000);
    }, 8352);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const Comment = (
    <WithModal text="«прыжок в гиперпространство»." triggerType="author" mode="text">
      Отсылка на Вархаммер. Луперкаль! Луперкаль!
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        Ракета готовилась к пуску, «двигатель прогрелся».
      </p>
      <p>
        В голове прозвучал Гагарин и его знаменитое «поехали».
      </p>
      <p>
        Ракета сорвалась с места и стала стремительно набирать скорость, оставляя после себя
        длинный белый шлейф и выжженную землю.
      </p>
      <p>
        Чувство тревоги отступило. Волноваться уже было поздно.
      </p>
      <p>
        Егора вдавливало в кресло с неимоверной силой.
      </p>
      <p>
        «Интересно, она смотрит?»
      </p>
      <p>
        Скорость всё нарастала, система готовилась к телепортации. Некоторые ошибочно называли это {Comment}
      </p>
    </PageWrapper>
  );
};
