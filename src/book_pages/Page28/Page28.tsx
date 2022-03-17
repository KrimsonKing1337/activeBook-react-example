import React from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useAudio } from 'hooks/effects/audio';

export const Page28 = () => {
  useAudio({
    src: '/assets/book_data/audios/sounds/spacedoor-close.mp3',
    type: 'oneShot',
    playOnLoad: true,
  });

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
        Герой не успел ни о чём подумать — через секунду мысль резко оборвалась на середине.
        Морфей забрал его в свои объятия.
      </p>
    </PageWrapper>
  );
};
