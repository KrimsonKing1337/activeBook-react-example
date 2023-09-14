import { useSound } from 'activeBook-core/hooks/effects/audio/sound';

import { PageWrapper } from 'components/PageWrapper';

export const Page37 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/pills.mp3',
    playOnLoad: true,
  });

  return (
    <PageWrapper>
      <p>
        С выпученными глазами он ринулся искать таблетки.
      </p>
      <p>
        Руки тряслись и никак не хотели подчиняться его воле, рассыпая всё вокруг.
      </p>
    </PageWrapper>
  );
};
