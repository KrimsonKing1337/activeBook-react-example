import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { EasterEgg as EasterEggComponent } from 'components/EasterEgg';

import { ModalWithVideoEasterEgg } from './components/ModalWithVideoEasterEgg';
import { useModalWithVideoEasterEgg } from './components/ModalWithVideoEasterEgg/hooks';

export const Page20 = () => {
  const { setModalIsActive, modalIsActive, videoRef } = useModalWithVideoEasterEgg();

  const EasterEgg = (
    <EasterEggComponent onClick={() => setModalIsActive(true)}>
      «Вот это поворот»,
    </EasterEggComponent>
  );

  return (
    <PageWrapper>
      <ModalWithVideoEasterEgg
        isActive={modalIsActive}
        setModalIsActive={setModalIsActive}
        videoRef={videoRef}
      />

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
