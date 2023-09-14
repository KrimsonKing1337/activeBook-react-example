import { useSound } from 'activeBook-core/hooks/effects/audio/sound';

import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';
import { Img } from 'components/Img';

export const Page42 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/cloud-steps.mp3',
    playOnLoad: true,
    loop: true,
    bg: true,
  });

  const EasterEgg = (
    <WithModal text="Люди приветствовали его будто старого доброго друга." triggerType="egg" eggId="page-42">
      <Img src="/assets/book_data/gifs/Efremov.gif" />
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        Мягкой поступью Егор зашагал к воротам, которые величаво, но бесшумно распахнулись перед ним, обдавая мужчину
        приятным лёгким ветерком.
      </p>
      <p>
        Вскоре он увидел большое количество зданий и людей. {EasterEgg}
      </p>
      <p>
        Озираясь по сторонам, он осторожно зашагал дальше.
      </p>
    </PageWrapper>
  );
};
