import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { EasterEggModal } from 'components/EasterEggModal';

export const Page39 = () => {
  const EasterEgg = (
    <EasterEggModal
      easterEggText="главный вопрос жизни, вселенной и всего такого."
      modalContent={<img src="/assets/book_data/images/42.jpg" alt="" />}
    />
  );

  return (
    <PageWrapper>
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
