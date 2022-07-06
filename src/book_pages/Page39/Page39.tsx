import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

export const Page39 = () => {
  const EasterEgg = (
    <WithModal text="главный вопрос жизни, вселенной и всего такого." triggerType="egg" eggId="page-39">
      <img src="/assets/book_data/images/42.jpg" alt="" />
    </WithModal>
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
