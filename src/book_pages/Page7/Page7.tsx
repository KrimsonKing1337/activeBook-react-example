import React, { useEffect } from 'react';

import { EasterEgg as EasterEggComponent } from 'components';

import { PageWrapper } from 'components/PageWrapper';

import { useSound } from 'hooks/effects/audio/sound';
import { useVibration } from 'hooks/effects/vibration';
import { useMusic } from 'hooks/effects/audio/music';

export const Page7 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/notification.mp3',
    playOnLoad: true,
    oneShot: true,
  });

  const music = useMusic({
    src: '/assets/book_data/audios/music/Jimmy.mp3',
    loop: false,
    playOnLoad: false,
  });

  const { vibrationOn } = useVibration();

  useEffect(() => {
    vibrationOn(500);
  }, []);

  const EasterEgg = (
    <EasterEggComponent onClick={() => music?.play()} id="page-7">
      очень любил
    </EasterEggComponent>
  );

  return (
    <PageWrapper>
      <p>
        Глянув в наладонник, Егор увидел сообщение от Кирилла, лучшего друга. Если бы не он,
        можно было бы давно сойти с ума.
      </p>
      <p>
        «Счастливого пути! Напиши как доберёшься» – значилось в сообщении. Егор невольно
        ухмыльнулся. Такое короткое, но даже сюда Кирилл умудрился впихнуть нотки юмора.
      </p>
      <p>
        «Спасибо, обязательно!» – отправил он ответ.
      </p>
      <p>
        Вот уже показалась ракета. Егор их {EasterEgg}. И всегда невольно улыбался, глядя на них.
        А эта была поистине громадной. И чем ближе они подъезжали — тем сильнее приходилось задирать голову вверх для
        того, чтобы увидеть макушку. Она была бы ещё больше, если бы не открытое в начале века топливо, которого
        требуется относительно немного для создания нужной тяги.
      </p>
      <p>
        На самом деле ракеты без людей уже отправлялись «заграницу», но показания, зафиксированные приборами были очень
        противоречивыми.
      </p>
      <p>
        Чтобы получить ответы, решили отправить существо, которое сможет воочию увидеть и описать происходящие там
        события и процессы. В нашем случае таким существом стал Егор.
      </p>
      <p>
        Вы спросите почему огромные деньги тратятся на это, а не, например, на решение социальных проблем? Ответ стоит
        искать там же, где и плитку, которую в некоторых городах перекладывают каждые полгода.
      </p>
    </PageWrapper>
  );
};
