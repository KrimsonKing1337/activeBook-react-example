import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

import { useSound } from 'hooks/effects/audio/sound';
import { useSideShadow } from 'hooks/effects/side/shadow';

export const Page10 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/alarm-spaceship.mp3',
    playOnLoad: true,
    loop: true,
    bg: true,
  });

  useSideShadow({
    color: 'red',
    speed: 850,
  });

  const Comment = (
    <WithModal text="Кто писал текст для этой ошибки?" triggerType="author" mode="text">
      Да, Егор. Это я написал такой текст, который заставил тебя немножко пробить четвёртую стену
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        Вдруг замигала красная лампочка, предупреждая о проблеме.
      </p>
      <p>
        Что-то пошло не по плану.
      </p>
      <p>
        Сообщение об ошибке гласило:
        «Телепортация невозможна. Обнаружена фатальная неисправность».
      </p>
      <p>
        «Фатальная неисправность? {Comment} Бред какой-то», – подумал Егор.
      </p>
      <p>
        Решив, что система просто дала сбой, космонавт проигнорировал сообщение и запустил операцию ещё раз.
      </p>
    </PageWrapper>
  );
};
