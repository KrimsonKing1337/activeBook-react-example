import { useSound } from 'activeBook-core/hooks/effects/audio/sound';
import { useVibration } from 'activeBook-core/hooks/effects/vibration';
import { PageWrapper } from 'activeBook-core/components/PageWrapper';

export const Page14 = () => {
  const { vibrationOn } = useVibration();

  useSound({
    src: '/assets/book_data/audios/sounds/shotgun-shot.mp3',
    playOnLoad: true,
    delay: 600,
    onPlay: () => {
      vibrationOn(250);
    },
  });

  return (
    <PageWrapper>
      <p>
        Послышался выстрел.
      </p>
      <p>
        Прямое попадание. Но крови не было.
      </p>
      <p>
        Но и пошевелиться Егор не мог. Его парализовало.
      </p>
      <p>
        Тем временем отец со странным выражением лица стал приближаться к Егору.
      </p>
      <p>
        Ближе, ещё ближе..
      </p>
      <p>
        Вот он уже протягивает руку..
      </p>
    </PageWrapper>
  );
};
