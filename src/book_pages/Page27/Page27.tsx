import { Interval } from '@types';

import { PageWrapper } from 'components/PageWrapper';
import { WithModal } from 'components/ColoredTextTrigger/WithModal';

import { useSound } from 'hooks/effects/audio/sound';
import { useVibration } from 'hooks/effects/vibration';

let interval: Interval = null;

export const Page27 = () => {
  const { vibrationOn } = useVibration();

  useSound({
    src: '/assets/book_data/audios/sounds/cosmos-impacts.mp3',
    loop: true,
    playOnLoad: true,
    bg: true,
    onPlay() {
      vibrationOn(300);

      interval = setInterval(() => {
        vibrationOn(300);
      }, 1102);
    },
    onUnmount() {
      if (interval) {
        clearInterval(interval);
      }
    },
  });

  const Comment1 = (
    <WithModal text="В космосе не было звуков," triggerType="author" mode="text">
      К слову, я долго не обращал внимания, что в космосе звуков нет и звуковой эффект не убирал.
      Но в итоге я выкрутился, чуть изменив текст
    </WithModal>
  );

  const Comment2 = (
    <WithModal text="за ту сторону изгороди." triggerType="author" mode="text">
      Собственно, книгу я назвал в честь одноимённого мультфильма. Кстати, рекомендую к просмотру
    </WithModal>
  );

  const Comment3 = (
    <WithModal text="вообще работал." triggerType="author" mode="text">
      Не, ну это и не научная фантастика, чего вы хотели
    </WithModal>
  );

  return (
    <PageWrapper>
      <p>
        {Comment1} поэтому голова сама воображала их. Каждый удар глухим эхом отзывался в голове.
      </p>
      <p>
        Наконец, стало появляться нечто белое. Правда пока это фиксировалось исключительно приборами.
        Пробилась совсем крошечная часть корабля.
      </p>
      <p>
        Медленно, но верно, Егор пробивался {Comment2}
      </p>
      <p>
        Было удивительно, что такой способ {Comment3}
      </p>
    </PageWrapper>
  );
};
