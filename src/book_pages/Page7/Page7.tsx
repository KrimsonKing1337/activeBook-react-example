import React, { useEffect } from 'react';

import { EasterEgg as EasterEggComponent } from 'components';

import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

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

  const Comment1 = (
    <WithModal text="в наладонник" triggerType="author" mode="text">
      Здесь я явно вдохновлялся Замятиным и Оурэллом, а возможно даже Стругацкими,
      там подобных слов с атмосферой ретро-футуризма много
    </WithModal>
  );

  const Comment2 = (
    <WithModal text="топливо," triggerType="author" mode="text">
      Вспоминается Футурама и зверёк, который испражнялся таким топливом
    </WithModal>
  );

  const Comment3 = (
    <WithModal text="решили отправить существо," triggerType="author" mode="text">
      Притянуто, конечно, сильно. Но как придумал — так придумал. В конце концов я здесь автор :p
    </WithModal>
  );

  const Comment4 = (
    <WithModal text="которую в некоторых городах перекладывают каждые полгода." triggerType="author" mode="text">
      Ну вы поняли
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        Глянув {Comment1}, Егор увидел сообщение от Ярослава, лучшего друга. Если бы не он,
        можно было бы давно сойти с ума.
      </p>
      <p>
        «Счастливого пути! Напиши как доберёшься» – значилось в сообщении. Егор невольно
        ухмыльнулся. Такое короткое, но даже сюда Ярик умудрился впихнуть нотки юмора.
      </p>
      <p>
        «Спасибо, обязательно!» – отправил он ответ.
      </p>
      <p>
        Вот уже показалась ракета. Егор их {EasterEgg}. И всегда невольно улыбался, глядя на них.
        А эта была поистине громадной. И чем ближе они подъезжали — тем сильнее приходилось задирать голову вверх для
        того, чтобы увидеть макушку. Она была бы ещё больше, если бы не открытое в начале века {Comment2} которого
        требуется относительно немного для создания нужной тяги.
      </p>
      <p>
        На самом деле ракеты без людей уже отправлялись «заграницу», но показания, зафиксированные приборами были очень
        противоречивыми.
      </p>
      <p>
        Чтобы получить ответы, {Comment3} которое сможет воочию увидеть и описать происходящие там
        события и процессы. В нашем случае таким существом стал Егор.
      </p>
      <p>
        Вы спросите почему огромные деньги тратятся на это, а не, например, на решение социальных проблем? Ответ стоит
        искать там же, где и плитку, {Comment4}
      </p>
    </PageWrapper>
  );
};
