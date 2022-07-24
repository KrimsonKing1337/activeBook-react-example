import React from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useSound } from 'hooks/effects/audio/sound';

export const Page31 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/yes-I-go-with-you.mp3',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <p>
        «Да, я пойду с тобой!» — пробормотал Егор сквозь сон.
      </p>
      <p>
        Он протянул руку..
      </p>
    </PageWrapper>
  );
};
