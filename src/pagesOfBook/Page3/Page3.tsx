import React from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useAudio } from 'hooks/effects/audio';
import { useMusic } from 'hooks/effects/music';

export const Page3 = () => {
  useAudio({
    src: '/assets/book_data/audios/sounds/people-and-cameras-ambient.mp3',
    loop: true,
    playOnLoad: true,
  });

  useMusic({
    src: '/assets/book_data/audios/music/Sergey_Eybog_-_A_Promise_From_Distant_Days.mp3',
    range: {
      from: 1,
      to: 3,
    },
  });

  return (
    <PageWrapper>
      <p>
        Он ехал очень заблаговременно. Даже слишком. Но журналисты и зеваки, судя по всему,
        тоже не спали всю ночь. Отовсюду доносились щёлкающие камеры. Кто-то пришёл с
        детьми. Кто-то что-то кричал вслед автомобилю. Кто-то стоял с микрофоном и вёл эфир.
      </p>
      <p>
        Предусмотрительно надетые солнцезащитные очки спасали глаза от бесконечных вспышек.
        Чем ближе к КПП — тем больше становилось людей. Впрочем, за воротами их вряд ли было
        меньше. Но хотя бы никто не лез тебе в рот с просьбами прокомментировать ситуацию или
        ослепить тебя очередной вспышкой камеры.
      </p>
    </PageWrapper>
  );
};
