import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { EasterEggModal } from 'components/EasterEggModal';

import { useSound } from 'hooks/effects/audio/sound';

export const Page42 = () => {
  useSound({
    src: 'assets/book_data/audios/sounds/cloud-steps.mp3',
    playOnLoad: true,
    loop: true,
    bg: true,
  });

  const EasterEgg = (
    <EasterEggModal
      easterEggText="Люди приветствовали его будто старого доброго друга."
      modalContent={<img src="/assets/book_data/gifs/Efremov.gif" alt="" />}
    />
  );

  return (
    <PageWrapper>
      <p>
        Мягкой поступью Егор зашагал к воротам, которые величаво, но бесшумно распахнулись перед ним, обдавая мужчину
        приятным лёгким ветерком.
      </p>
      <p>
        Вскоре он увидел большое количество зданий и людей. {EasterEgg}
      </p>
      <p>
        Озираясь по сторонам, он осторожно зашагал дальше.
      </p>
    </PageWrapper>
  );
};
