import React from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useSound } from 'hooks/effects/audio/sound';

export const Page31 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/spacedoor-open.mp3',
    playOnLoad: true,
    oneShot: true,
  });

  return (
    <PageWrapper>
      <p>
        Но по закону подлости его сон бесцеремонно прервали.
        Люк над ним открылся.
      </p>
      <p>
        Девочка тут же растворилась в забытье. И лишь слюни на бороде и подушке напоминали о сладком сне.
      </p>
    </PageWrapper>
  );
};
