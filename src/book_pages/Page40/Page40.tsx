import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { EasterEgg as EasterEggComponent } from 'components/ColoredTextTrigger/EasterEgg';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

import { useSound } from 'hooks/effects/audio/sound';
import { useMusic } from 'hooks/effects/audio/music';
import { useSideShadow } from 'hooks/effects/side/shadow';

export const Page40 = () => {
  const sound = useSound({
    src: 'assets/book_data/audios/sounds/valhalla.mp3',
  });

  const music = useMusic({
    src: 'assets/book_data/audios/music/caramelldansen.mp3',
    playOnLoad: false,
    loop: true,
  });

  const { sideShadowOn } = useSideShadow({
    color: 'caramel',
    speed: 364,
    isActiveDefault: false,
  });

  const EasterEgg1 = (
    <EasterEggComponent onClick={() => sound?.play()} id="page-40.1">
      на Вальгаллу
    </EasterEggComponent>
  );

  const easterEgg2OnClickHandler = () => {
    music?.play();
    sideShadowOn();
  };

  const EasterEgg2 = (
    <EasterEggComponent onClick={easterEgg2OnClickHandler} id="page-40.2">
      диско-шар
    </EasterEggComponent>
  );

  const Comment1 = (
    <WithModal text="с ними всё будет в порядке." triggerType="author" mode="text">
      Здесь я хотел кратко описать их судьбы, что они мол поженились и вместе скучали по Егору, но не стал.
      С бывшей женой планировалась отдельная арка, но в итоге я от этого отказался. Её бы звали Полина,
      в честь моей сестры
    </WithModal>
  );

  const Comment2 = (
    <WithModal text="мы в ответе за тех, кого приручили." triggerType="author" mode="text">
      Тут тоже отсылка, думаю, ясна. Наверное, отчасти я решил это сюда включить, потому что только вот недавно
      ознакомился с произведением «Маленький принц». С другой стороны, эта фраза уже настолько вошла в обиход,
      что это уже и не отсылка, а просто народная мудрость
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        Вскоре, он стал задавать не те вопросы, которые было принято задавать в таком случае (подобных ситуаций он
        встречал много в книгах и фильмах), а те которые мучили его на самом деле.
      </p>
      <p>
        — Она смотрела? - наконец осмелился он задать вопрос.
      </p>
      <p>
        — О, да. Она смотрела. Я знаю, что ты хочешь узнать следующим. И да, у вас был шанс. Потерять тебя — для неё это
        было действительно горе. И для Ярослава тоже. Но не переживай, {Comment1}
      </p>
      <p>
        Почему-то это утешило Егора. С другой стороны, навалила грусть и щемящее чувство одиночества. В итоге он
        спросил:
      </p>
      <p>
        — И что теперь?
      </p>
      <p>
        — Как что, отправлю тебя к таким же замечательным и интересным людям, где вы будете вечно пировать и отлично
        проводить время - ответил Александр.
      </p>
      <p>
        — Типа в Рай? - уточнил Егор. Вообще, описанием больше походило {EasterEgg1}, но он не стал это произносить.
      </p>
      <p>
        — Так мою комнату ещё никто не называл. Но да, иногда там действительно как в Раю, — усмехнулся Создатель и
        продолжил, — слушай, это всё и так зашло очень далеко. Я просто создал Вселенную в рамках домашнего задания в
        школе. Но я даже не представлял, что в итоге всё так обернётся. Теперь вот расхлёбываю.. В конце концов,
        {Comment2}
      </p>
      <p>
        — Ты создал всё Сущее как домашнее задание в школе? — переспросил Егор.
      </p>
      <p>
        — Всё не так сложно, как тебе кажется. Не бери в голову, мой друг. Пойдём же. Я знаю, что поможет поднять тебе
        настроение. Там даже {EasterEgg2} есть!
      </p>
    </PageWrapper>
  );
};
