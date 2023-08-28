import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

import { useSound } from 'hooks/effects/audio/sound';
import { useRain } from 'hooks/effects/flashlight/rain';

export const Page13 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/rain-and-thunder.mp3',
    loop: true,
    playOnLoad: true,
    bg: true,
  });

  useRain();

  const Comment = (
    <WithModal text="Снился дождь." triggerType="author" mode="text">
      Очень горжусь тем, как круто выглядит здесь эффект дождя. Особенно со вспышкой
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        {Comment} Сильный, тяжёлый. Наш герой не видел дождей с осени и уже успел соскучиться по этому
        природному явлению. Пусть просто во сне, но всё равно приятно. Плюс к этому ещё и не мокнешь.
      </p>
      <p>
        И будто нужно было куда-то бежать. Прочь оттуда, бежать от дождя. Снился отец, которого Егор так любил.
        Он что-то кричал ему, но слова было не разобрать из-за сильного ливня.
      </p>
      <p>
        Тогда отец Егора пошёл в сарай. А когда вернулся – в его в руках было ружьё.
      </p>
      <p>
        Он прицелился.
      </p>
    </PageWrapper>
  );
};
