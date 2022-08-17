import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

import { useSound } from 'hooks/effects/audio/sound';

export const Page29 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/spacedoor-close.mp3',
    playOnLoad: true,
  });

  const Comment = (
    <WithModal text="оборвалась на середине. " triggerType="author" mode="text">
      Здесь я немного описал собственный опыт применения общей анестезии, у меня было именно так
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        Включив систему поддержки сна, Егор лёг в специальную капсулу.
      </p>
      <p>
        Люк над головой закрылся.
      </p>
      <p>
        Почувствовалось лёгкое головокружение, которое всегда бывает перед тем как погрузиться в искусственный сон.
      </p>
      <p>
        Герой не успел ни о чём подумать — через секунду мысль резко {Comment}
        Морфей забрал его в свои объятия.
      </p>
    </PageWrapper>
  );
};
