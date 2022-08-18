import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

import { useSound } from 'hooks/effects/audio/sound';

export const Page4 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/electric-gate-close.mp3',
    playOnLoad: true,
  });

  const Comment1 = (
    <WithModal text="заглянуть за" triggerType="author" mode="text">
      Таким было первоначальное название этого мини-рассказа.
      Взял я эту строчку из песни группы Агата Кристи - Ковёр-вертолёт
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        Ворота, наконец, закрылись за спиной. Щёлканье стихло. Лишь тревожные мысли никуда не
        делись и продолжали свой монолог.
      </p>
      <p>
        С другой стороны, восхищение и гордость одолевали его до сих пор. Достижения наших
        учёных всё же потрясают. Не каждый день человек летит {Comment1} границы вселенной. А
        ведь совсем недавно люди жили лишь на Земле и не знали, как добраться до ближайших
        экзопланет. Да-а, технический прогресс не стоит на месте. И глядя вокруг себя невольно
        улыбаешься от того, что человечество смогло создать.
      </p>
      <p>
        – Егор! - кто-то окликнул сзади.
      </p>
      <p>
        Обернувшись, он заметил своего надзорного врача и ускорил шаг, желая скрыться от него за поворотом.
      </p>
    </PageWrapper>
  );
};
