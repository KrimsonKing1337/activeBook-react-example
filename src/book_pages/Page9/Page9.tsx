import React, { useEffect } from 'react';

import { PageWrapper } from 'components/PageWrapper';

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
        Скорость всё нарастала, система готовилась к телепортации. Некоторые ошибочно называли
        это «прыжок в гиперпространство».
      </p>
    </PageWrapper>
  );
};
