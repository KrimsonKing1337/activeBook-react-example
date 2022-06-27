import React from 'react';

import { PageWrapper } from 'components/PageWrapper';

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
        «Фатальная неисправность? Кто писал текст для этой ошибки? Бред какой-то», – подумал Егор.
      </p>
      <p>
        Решив, что система просто дала сбой, космонавт проигнорировал сообщение и запустил операцию ещё раз.
      </p>
    </PageWrapper>
  );
};
