import React, { useRef } from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { EasterEggModal } from 'components/EasterEggModal';

export const Page21 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const EasterEgg = (
    <EasterEggModal
      easterEggText="«Вот это поворот»,"
      modalContent={<video src="/assets/book_data/videos/wow_turn.mp4" ref={videoRef} />} />
  );

  return (
    <PageWrapper>
      <h1>
        Глава 5.
      </h1>
      <h2>
        Пробиваясь сквозь горизонт.
      </h2>
      <p>
        Прошло несколько дней. Егор постоянно разбавлял Уиллиса менее модернистскими рассказами,
        которые было не так сложно воспринимать.
      </p>
      <p>
        Оставалась последняя сотня страниц, но дочитать ему не дали — корабль стал резко сбрасывать скорость.
      </p>
      <p>
        Закрыв наладонник, космонавт подошёл к приборной панели и стал искать глазами причину остановки.
      </p>
      <p>
        По всем показателям, прямо перед кораблём находилась граница Вселенной!
      </p>
      <p>
        {EasterEgg} — мелькнуло в голове.
      </p>
      <p>
        И это было довольно странно, учитывая, что до границы лететь, по подсчётам, ещё неделю как минимум.
      </p>
      <p>
        В голове мелькали самые разные предположения, но ни в одном не было достаточно весомых аргументов.
      </p>
    </PageWrapper>
  );
};
