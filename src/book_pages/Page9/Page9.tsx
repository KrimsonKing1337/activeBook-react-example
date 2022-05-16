import React from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useAudio } from 'hooks/effects/audio';
import { useSideShadow } from 'hooks/effects/sideShadow';

export const Page9 = () => {
  useAudio({
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
        А такое сообщение об ошибке никто никогда не видел:

        «В указанной области для телепортации не может находиться более одного объекта с одним и тем же
        идентификатором».
      </p>
      <p>
        «Как такое может быть? Бред какой-то», – подумал Егор.
      </p>
      <p>
        Дело в том, что во Вселенной у каждого объекта (одушевлённого или неодушевлённого) есть свой уникальный id.
        Даже у клонов он разный.
      </p>
      <p>
        Решив, что система просто дала сбой, космонавт проигнорировал сообщение и запустил операцию ещё раз.
      </p>
    </PageWrapper>
  );
};
