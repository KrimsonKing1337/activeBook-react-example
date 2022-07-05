import React from 'react';

import { PageWrapper } from 'components/PageWrapper';
import { EasterEgg as EasterEggComponent } from 'components/ColoredTextTrigger/EasterEgg';

import { useSound } from 'hooks/effects/audio/sound';

export const Page40 = () => {
  const sound = useSound({
    src: 'assets/book_data/audios/sounds/valhalla.mp3',
  });

  const EasterEgg = (
    <EasterEggComponent onClick={() => sound?.play()}>
      на Вальгаллу
    </EasterEggComponent>
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
        было действительно горе. И для Кирилла тоже. Но не переживай, с ними всё будет в порядке.
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
        — Типа в Рай? - уточнил Егор. Вообще, описанием больше походило {EasterEgg}, но он не стал это произносить.
      </p>
      <p>
        — Так мою комнату ещё никто не называл. Но да, иногда там действительно как в Раю, — усмехнулся Создатель и
        продолжил, — слушай, это всё и так зашло очень далеко. Я просто создал Вселенную в рамках домашнего задания в
        школе. Но я даже не представлял, что в итоге всё так обернётся. Теперь вот расхлёбываю.. В конце концов мы в
        ответе за тех, кого приручили.
      </p>
      <p>
        — Ты создал всё Сущее как домашнее задание в школе? — переспросил Егор.
      </p>
      <p>
        — Всё не так сложно, как тебе кажется. Не бери в голову, мой друг. Пойдём же. Я знаю, что поможет поднять тебе
        настроение.
      </p>
    </PageWrapper>
  );
};
