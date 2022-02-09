import React, { useEffect } from 'react';

import { PageWrapper } from 'components/PageWrapper';

import { useAudio } from 'hooks/effects/audio';

export const Page3 = () => {
  const audioInst = useAudio({
    src: '/assets/book_data/audios/sounds/people-and-cameras-ambient.mp3',
    loop: true,
  });

  useEffect(() => {
    if (!audioInst) {
      return;
    }

    audioInst.play();
  }, [audioInst]);

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
