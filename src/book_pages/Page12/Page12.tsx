import { useSound } from 'activeBook-core/hooks/effects/audio/sound';

import { PageWrapper } from 'components/PageWrapper';

export const Page12 = () => {
  useSound({
    src: '/assets/book_data/audios/sounds/fly-ship-engine.mp3',
    loop: true,
    playOnLoad: true,
    bg: true,
  });

  return (
    <PageWrapper>
      <p>
        Мерный гул двигателя успокаивал нервы.
      </p>
      <p>
        Лететь ещё очень-очень долго. Благо, компьютер мог сам корректировать курс в зависимости от различных
        препятствий, поэтому не нужно следить за ситуацией ежесекундно.
      </p>
      <p>
        Сообщения между кораблём и ближайшим людским поселением отсюда могут идти целую вечность.
        Нужно себя чем-то занять.
      </p>
      <p>
        А что может быть лучше, чем поспать? Что ж, для начала – неплохо.
      </p>
      <p>
        Устроившись по удобнее на местном филиале дивана, путешественник провалился в сон.
      </p>
    </PageWrapper>
  );
};
