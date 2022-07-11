import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

export const Page30 = () => {
  const Comment = (
    <WithModal text="«ты пойдёшь со мной?»" triggerType="author" mode="text">
      Не все такие же задроты как я, поэтому поясню, что это отсылка на графическую новеллу «бесконечное лето»,
      музыка оттуда же
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        Снилось что-то необыкновенно уютное и тёплое. Лето, зелень и лёгкий ветерок.
      </p>
      <p>
        Уносящий вдаль старый автобус.
      </p>
      <p>
        И какая-то странная девочка. Которая спросила {Comment}
      </p>
    </PageWrapper>
  );
};
