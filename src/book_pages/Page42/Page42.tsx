import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { EasterEgg as EasterEggComponent } from 'components/EasterEgg';

import { useSound } from 'hooks/effects/audio/sound';

import { ModalWithGifEasterEgg } from './components/ModalWithGifEasterEgg';
import { useModalWithGifEasterEgg } from './components/ModalWithGifEasterEgg/hooks';

export const Page42 = () => {
  const { modalIsActive, setModalIsActive } = useModalWithGifEasterEgg();

  useSound({
    src: 'assets/book_data/audios/sounds/cloud-steps.mp3',
    playOnLoad: true,
    loop: true,
    bg: true,
  });

  const EasterEgg = (
    <EasterEggComponent onClick={() => setModalIsActive(true)}>
      Люди приветствовали его будто старого доброго друга.
    </EasterEggComponent>
  );

  return (
    <PageWrapper>
      <ModalWithGifEasterEgg isActive={modalIsActive} setModalIsActive={setModalIsActive} />

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
