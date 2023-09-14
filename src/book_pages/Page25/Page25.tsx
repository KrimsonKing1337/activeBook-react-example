import { useSound } from 'activeBook-core/hooks/effects/audio/sound';

import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

export const Page25 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/coin-flipping.mp3',
    playOnLoad: true,
    loop: true,
    bg: true,
  });

  const Comment1 = (
    <WithModal text="подбрасывать монетку" triggerType="author" mode="text">
      Тут вспоминается Двуликий из Бэтмена
    </WithModal>
  );

  const Comment2 = (
    <WithModal text="достаточно сильно ударить." triggerType="author" mode="text">
      Кек
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        Космонавт стал {Comment1} — это всегда помогало ему думать.
      </p>
      <p>
        Плюс — хорошее средство разбавить гнетущую тишину.
      </p>
      <p>
        В голову ничего не приходило, кроме банального тарана. Ну а что?
        Любую стену можно пробить, нужно лишь {Comment2}
      </p>
    </PageWrapper>
  );
};
