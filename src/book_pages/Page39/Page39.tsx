import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { EasterEgg as EasterEggComponent } from 'components/EasterEgg';

import { useModalWithImgEasterEgg } from './components/ModalWithImgEasterEgg/hooks';
import { ModalWithImgEasterEgg } from './components/ModalWithImgEasterEgg';

export const Page39 = () => {
  const { modalIsActive, setModalIsActive } = useModalWithImgEasterEgg();

  const EasterEgg = (
    <EasterEggComponent onClick={() => setModalIsActive(true)}>
      главный вопрос жизни, вселенной и всего такого.
    </EasterEggComponent>
  );

  return (
    <PageWrapper>
      <ModalWithImgEasterEgg setModalIsActive={setModalIsActive} isActive={modalIsActive} />

      <p>
        Они ещё много болтали. Обсуждали {EasterEgg}
      </p>
      <p>
        Егор пытался осознать происходящее и просто не мог поверить во всё это. Но его заверили, что у него будет много
        времени всё понять.
      </p>
      <p>
        Ответы были такими простыми и сложными одновременно, что это не имело никакого смысла. Человеческий разум был
        просто неспособен воспринять такого рода информацию. Возможно, со временем Егору станет понятно.
      </p>
    </PageWrapper>
  );
};
