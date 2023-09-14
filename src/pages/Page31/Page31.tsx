import { useSound } from 'activeBook-core/hooks/effects/audio/sound';
import { PageWrapper } from 'activeBook-core/components/PageWrapper';

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
